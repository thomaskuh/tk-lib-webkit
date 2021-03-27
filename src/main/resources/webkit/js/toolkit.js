var myMod = angular.module('toolkit', ['pascalprecht.translate']);

/* ================ */
/* === SERVICES === */
/* ================ */

myMod.factory('tkToastService', ['$timeout','$translate', function($timeout, $translate) {
	var service = {toasts: []};

	/* internals */
	service.done = function(valToast) {
		var idx = service.toasts.indexOf(valToast);
		service.toasts.splice(idx,1);
	};

	service.show = function(valType, valMessage, valDetails) {
		var toast = {type: valType, msg: valMessage, details: valDetails};
		service.toasts.push(toast);
		$timeout(service.done,4000,true,toast);
		return toast;
	};
	  
	/* api - show simple text */
	service.info = function(messageText, detailTexts) {
		return service.show('info', messageText, detailTexts);
	};
	service.error = function(messageText, detailTexts) {
		return service.show('error', messageText, detailTexts);
	};
	
	/* api - show i18n text (key+params given) */
	service.iinfo = function(i18nKey, params) {
    $translate(i18nKey, params).then(
        (ok) => service.info(ok),
        (nok) => {service.info(nok)}
    );
	};
  service.ierror = function(i18nKey, params) {
    $translate(i18nKey, params).then(
        (ok) => service.error(ok),
        (nok) => {service.error(nok)}
    );
  };
  
  /* api - show i18n error (tk error response data given) */
  service.tkerror = function(responseData) {
    $translate('ERROR.' + responseData.key, responseData.params).then(
        (ok) => service.tkerror2(responseData, ok),
        (nok) => service.tkerror2(responseData, nok)
    );
  };
  service.tkerror2 = function(responseData, firstTranslation) {
    var details = [];
    if(responseData.details) {
      responseData.details.forEach(function(detail) {
        details.push($translate.instant('ERROR.DETAIL.' + detail.key, detail.params));
      });
    }
    service.error(firstTranslation, details);
  };
	  
	return service;
}]);

myMod.factory('tkUserService', ['$timeout', '$window', function($timeout, $window) {
	var service = {};
	service.key = 'tklogindata';
	service.data = {user: null, pass: null, auth: null};
	
	service.login = function(valUser, valPass) {
		service.data.user = valUser;
		service.data.pass = valPass;
		service.data.auth = "Basic " + btoa(valUser + ':' + valPass);
		$window.localStorage.setItem(service.key, JSON.stringify(service.data));
	};

	service.clear = function() {
		service.data.user = null;
		service.data.pass = null;
		service.data.auth = null;
		$window.localStorage.removeItem(service.key);
	};

	var dingens = JSON.parse($window.localStorage.getItem(service.key));
	if(dingens && dingens.user && dingens.pass && dingens.auth) {
		service.data.user = dingens.user;
		service.data.pass = dingens.pass;
		service.data.auth = dingens.auth;
	}

	return service;
}]);

myMod.factory('tkInterceptorService', function($q, $translate, $rootRouter, tkConfig, tkToastService, tkUserService) {
	var service = {state: {counter: 0}};
	
	service.request = function(config) {
		service.state.counter++;
		if(tkUserService.data.auth) config.headers['Authorization'] = tkUserService.data.auth;
		return config;
    };
    
    service.response = function(response) {
    	service.state.counter--;
    	return response;
    };
    
    service.responseError = function(rejection) {
    	service.state.counter--;

    	if(rejection.status <= 0) {
    		$translate('ERROR.NETWORK').then(tkToastService.error, tkToastService.error);
    	}
    	else if(rejection.data && rejection.data.key) {
    	  tkToastService.tkerror(rejection.data);
    	}
    	else {
    		tkToastService.error(rejection.status + " - " + rejection.statusText);	
    	}
    	
    	if(401 == rejection.status) {
    		tkUserService.clear();
    		$rootRouter.navigate(tkConfig.authRouteLogin);
    	}

    	return $q.reject(rejection);
    }
    // not required atm: service.requestError = function(rejection) { return $q.reject(rejection); };
	return service;
});


myMod.factory('tkUploadService', [ '$rootScope', '$http', 'tkToastService', 'tkUserService', function($rootScope, $http, tkToastService, tkUserService) {
  var service = new Object();
  
  /* attributes */
  service.queue = [];
  service.failed = [];
  service.listener = null;
  service.state = {'uploading': false, percent: 0, currentItem: null};

  /* api */
  service.registerListener = function(valueListener) {
    service.listener = valueListener;
  };

  service.uploadFiles = function(valueFiles, valueURL, valueParams) {
    if(!valueFiles || valueFiles.length == 0) return;
    
    valueFiles.forEach(function(vFile) {
      var item = {file: vFile, url: valueURL, params: valueParams, error: null, errorMsg: null}
      service.queue.push(item);
    });

    service.next();
  };
  
  /* internals */
  service.next = function() {
    if(service.state.currentItem != null) {
      return;
    }
  
    if(service.queue.length == 0) {
      return;
    }
    
    service.state.currentItem = service.queue.shift();
    service.state.uploading = true;
  
    /* Create XHR */
    var xhr = new XMLHttpRequest();
    
    /* Add listeners */
    xhr.upload.addEventListener("progress", service.uploadProgress, false);
    xhr.addEventListener("load", service.uploadEvent, false);
    xhr.addEventListener("error", service.uploadEvent, false);
    xhr.addEventListener("abort", service.uploadEvent, false);
    
    /* Direct upload (no form multipart shit) */
    xhr.open("POST", service.state.currentItem.url);
    
    if(tkUserService.data.auth) {
      xhr.setRequestHeader("Authorization", tkUserService.data.auth);
    }

    xhr.setRequestHeader("X-ul-filename", Base64.encode(service.state.currentItem.file.name));
    if(service.state.currentItem.file.lastModified) {
      xhr.setRequestHeader("X-ul-filetsmod", service.state.currentItem.file.lastModified);
    }
    if(service.state.currentItem.params != null) {
      for(var x in service.state.currentItem.params) {
        xhr.setRequestHeader('X-ul-' + x, service.state.currentItem.params[x]);
      }
    }
    xhr.send(service.state.currentItem.file);
  };
  
  service.uploadProgress = function(evt) {
    if (evt.lengthComputable) {
      var percentComplete = Math.round(evt.loaded * 100 / evt.total);
      $rootScope.$apply(function() {
        service.state.percent = percentComplete;
      });
    }
  };
  
  service.uploadEvent = function(evt) {
    // this = XMLHttpRequest
    if(200 != this.status) {
      var jsonResponse = {key: 'UPLOAD'};
      try {jsonResponse = angular.fromJson(this.response)} catch (e) { /* failing whenever error isnt json */ }
      
      $rootScope.$apply(function() {
        service.state.currentItem.error = jsonResponse;
        tkToastService.tkerror(jsonResponse);
        service.uploadDone(false);
      });
    }
    else {
      $rootScope.$apply(function() {
        service.uploadDone(true);
      });
    }
  };
  
  service.uploadDone = function(withSuccess) {
    if(!withSuccess) {
      service.failed.push(service.state.currentItem);
    }
    
    service.state.currentItem = null;
    service.state.uploading = false;
    service.state.percent = 0;

    if(service.queue.length == 0) {
      if(service.failed.length > 0) {
        service.failed = [];
      }
      if(service.listener != null) {
        service.listener();
      }
    }

    service.next();
  };
  
  // Simple version for single files or uploadables without a queue returning just a promise.
  service.simpleUpload = function(valueUploadable, valueURL, valueParams, valueFilename, valueModified) {
  	if(!valueUploadable) return;

    return new Promise(function(myResolve, myReject) {
	  	// Wrapper
	  	var item = {uploadable: valueUploadable, url: valueURL, params: valueParams, filename: valueFilename, modified: valueModified};

    	/* Create XHR */
    	var xhr = new XMLHttpRequest();
		
    	xhr.onreadystatechange = function() {
	    	if (xhr.readyState == XMLHttpRequest.DONE) {
	    		if(xhr.status == 200) {
					var jsonResponse = this.response;
			      	try {jsonResponse = angular.fromJson(this.response)} catch (e) { /* failing whenever error isnt json */ }
			      	$rootScope.$apply(function() {
		    			myResolve(jsonResponse);
		    		});
		    	}
		    	else {
					var jsonResponse = {key: 'UPLOAD'};
		      		try {jsonResponse = angular.fromJson(this.response)} catch (e) { /* failing whenever error isnt json */ }
		      		$rootScope.$apply(function() {
		      			tkToastService.tkerror(jsonResponse);
						myReject(jsonResponse);
					});
		    	}
	    	}
    	};
    	
    	/* Direct upload (no form multipart shit) */
    	xhr.open("POST", item.url);
		
	    if(tkUserService.data.auth) {
	      xhr.setRequestHeader("Authorization", tkUserService.data.auth);
	    }
		
    	xhr.setRequestHeader("X-ul-filename", Base64.encode(item.filename));
    	
    	if(item.modified) {
      		xhr.setRequestHeader("X-ul-filetsmod", item.modified);
    	}
		if(item.params != null) {
			for(var x in item.params) {
        		xhr.setRequestHeader('X-ul-' + x, item.params[x]);
      		}
    	}
    	xhr.send(item.uploadable);
	});
  };
  
  // Shortcut for file uploads extracting filename and modified from file.
  service.simpleUploadFile = function(valueFile, valueURL, valueParams) {
  	return service.simpleUpload(valueFile, valueURL, valueParams, valueFile.name, valueFile.lastModified);
  };
  
  
  return service;
}]);


/* ================== */
/* === DIRECTIVES === */
/* ================== */

myMod.directive('tkLoading', function(tkInterceptorService) {
	return {
		restrict: 'A',
	    multiElement: true,
	    link: function(scope, element, attr) {
			element.addClass('is-hidden');
	    	scope.state = tkInterceptorService.state;
	    	scope.$watch('state.counter', function(value) {
	    		element[scope.state.counter == 0 ? 'addClass' : 'removeClass']('is-hidden');
	    	});
	    }
	};
});

myMod.directive('tkLoadingNot', function(tkInterceptorService) {
	return {
		restrict: 'A',
	    multiElement: true,
	    link: function(scope, element, attr) {
	    	scope.state = tkInterceptorService.state;
	    	scope.$watch('state.counter', function(value) {
	    		element[scope.state.counter != 0 ? 'addClass' : 'removeClass']('is-hidden');
	    	});
	    }
	};
});

// Only allow regex-filtered chars on input.
// Usage: tk-input-filter="^[0-9]*$"
myMod.directive('tkInputFilter', function() {
	return {
		restrict: 'A',
	    multiElement: true,
	    link: function(scope, element, attrs) {
	    	var regex = new RegExp(attrs.tkInputFilter, 'i');
	    	var filter = function(value) {
				return regex.test(value);
			};
	    	
			["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
				element[0].addEventListener(event, function() {
					if (filter(this.value)) {
						this.oldValue = this.value;
						this.oldSelectionStart = this.selectionStart;
						this.oldSelectionEnd = this.selectionEnd;
					} else if (this.hasOwnProperty("oldValue")) {
						this.value = this.oldValue;
						this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
					} else {
						this.value = "";
					}
				});
			});
	    }
	};
});

/* ================== */
/* === COMPONENTS === */
/* ================== */

myMod.component('tkToasts', {
	  template: '<tk-toast ng-repeat="toast in $ctrl.toasts" tk-model="toast"></tk-toast>',
	  bindings: { },
	  controller: function(tkToastService) {
		  var ctrl = this;
		  ctrl.toasts = tkToastService.toasts;
	  }
});

myMod.component('tkToast', {
	template: '\
		<div class="notification" ng-class="{\'is-info\': $ctrl.tkModel.type == \'info\', \'is-danger\': $ctrl.tkModel.type == \'error\'}"> \
			<h1 class="subtitle">{{$ctrl.tkModel.msg}}</h1> \
			<div class="content" ng-if="$ctrl.tkModel.details && $ctrl.tkModel.details.length > 0"><ul> \
				<li ng-repeat="detail in $ctrl.tkModel.details">{{detail}}</li> \
			</ul></div> \
		</div>',
	  bindings: { tkModel: '<' },
	  controller: function() {
		  var ctrl = this;
	  }
});

myMod.component('tkLoginButton', {
	template: '\
        <a ng-if="$ctrl.data.user" ng-click="$ctrl.logout()" class="button is-light"><i class="fas fa-sign-out-alt">&nbsp;</i>{{\'LOGIN.OUT\'|translate}} {{$ctrl.data.user}}</a> \
        <a ng-if="!$ctrl.data.user" ng-click="$ctrl.login()" class="button is-light"><i class="fas fa-sign-in-alt">&nbsp;</i>{{\'LOGIN.IN\'|translate}}</a> \
	',
	bindings: {},
	controller: function($rootRouter, tkConfig, tkUserService) {
		var ctrl = this;
		ctrl.data = tkUserService.data;
		ctrl.login = function() {
			$rootRouter.navigate(tkConfig.authRouteLogin);
		};
		ctrl.logout = function() {
			tkUserService.clear();
			$rootRouter.navigate(tkConfig.authRouteAfterLogout);
		};
	}
});

myMod.component('tkLoginForm', {
	template: '\
		<div class="message is-dark"> \
			<div class="message-header"><p>{{\'LOGIN.TITLE\'|translate}}</p></div> \
			<div class="message-body"> \
				<form ng-submit="$ctrl.action()"> \
					<div class="field"> \
						<div class="control has-icons-left has-icons-right"> \
							<input ng-model="$ctrl.user" class="input" type="text" placeholder="{{\'LOGIN.USER\'|translate}}" /> \
							<span class="icon is-small is-left"><i class="fas fa-user"></i></span> \
						</div> \
					</div> \
					<div class="field"> \
						<div class="control has-icons-left has-icons-right"> \
							<input ng-model="$ctrl.pass" class="input" type="password" placeholder="{{\'LOGIN.PASS\'|translate}}" /> \
							<span class="icon is-small is-left"><i class="fas fa-key"></i></span> \
			        	</div> \
					</div> \
					<div class="field"> \
						<div class="control has-text-right"> \
							<button type="submit" class="button is-dark"><i class="fas fa-sign-in-alt">&nbsp;</i>{{\'LOGIN.SUBMIT\'|translate}}</button> \
						</div> \
					</div> \
				</form> \
			</div> \
		</div>',
	bindings: {},
	controller: function($http, $rootRouter, tkUserService, tkConfig) {
		var ctrl = this;
		ctrl.user = '';
		ctrl.pass = '';

		ctrl.$routerOnActivate = function(next, previous) {
			if(previous) {
				ctrl.successPath = '/' + previous.urlPath;
			}
		};
		  
		ctrl.action = function() {
			// Store credentials and probe against a get-ping-url to ensure valid.
			tkUserService.login(ctrl.user, ctrl.pass);
			$http.get(tkConfig.authUrlProbe).then(
				(ok) => {
					if(ctrl.successPath) $rootRouter.navigateByUrl(ctrl.successPath);
					else $rootRouter.navigate(tkConfig.authRouteAfterLogin);
				},
				(err) => {}
			);
		};

		tkUserService.clear();
	}
});



/* ============= */
/* === UTILS === */
/* ============= */

var tkDefaultApp = function(cfg) {
	var app = angular.module('app', ['ngComponentRouter', 'pascalprecht.translate', 'ngSanitize', 'toolkit']);
	
	app.constant('tkConfig', {
		authRouteLogin: cfg && cfg.authRouteLogin || ['Login'],             // Route to the tk-login-form
		authRouteAfterLogin: cfg && cfg.authRouteAfterLogin || ['Home'],    // Route after login on unknown previous path
		authRouteAfterLogout: cfg && cfg.authRouteAfterLogout || ['Home'],  // Route after logout
		authUrlProbe: cfg && cfg.authUrlProbe || '/api/probe'               // Called via HTTP-GET to proof basic auth is fine
	});

	app.value('$routerRootComponent', 'app');
	
	app.config(function($locationProvider, $translateProvider, $httpProvider) {
	  $locationProvider.html5Mode(false);
	  $locationProvider.hashPrefix('');
	  $translateProvider.useStaticFilesLoader({prefix: 'i18n/', suffix: '.json'});
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.useSanitizeValueStrategy('sanitize');
	  $httpProvider.interceptors.push('tkInterceptorService');
	});

	return app;
};
