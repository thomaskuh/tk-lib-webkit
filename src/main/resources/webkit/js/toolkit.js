var myMod = angular.module('toolkit', ['pascalprecht.translate']);

/* ================ */
/* === SERVICES === */
/* ================ */

myMod.factory('tkToastService', ['$timeout', function($timeout) {
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
	  
	/* api */
	service.info = function(messageText, detailTexts) {
		return service.show('info', messageText, detailTexts);
	};

	service.error = function(messageText, detailTexts) {
		return service.show('error', messageText, detailTexts);
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
    		$translate('ERROR.' + rejection.data.key, rejection.data.params).then(
    				(ok) => service.onTranslation(rejection, ok),
    				(nok) => {service.onTranslation(rejection, nok)}
    		);
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

    // not required atm
    // service.requestError = function(rejection) { return $q.reject(rejection); };
    
    service.onTranslation = function(rejection, translation) {
		var details = [];
		if(rejection.data.details) {
			rejection.data.details.forEach(function(detail) {
				details.push($translate.instant('ERROR.DETAIL.' + detail.key, detail.params));
			});
		}
		tkToastService.error(translation, details);
    };    

	return service;
});


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

var tkDefaultApp = function() {
	var app = angular.module('app', ['ngComponentRouter', 'pascalprecht.translate', 'ngSanitize', 'toolkit']);

	app.constant('tkConfig', {
		authRouteLogin: ['Login'],  	// Route to the tk-login-form
		authRouteAfterLogin: ['Home'],  // Route after login on unknown previous path
		authRouteAfterLogout: ['Home'], // Route after logout
		authUrlProbe: '/api/probe'		// Called via HTTP-GET to proof basic auth is fine
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
