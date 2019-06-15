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

	service.show = function(valType, valMessage) {
		var toast = {type: valType, msg: valMessage};
		service.toasts.push(toast);
		$timeout(service.done,4000,true,toast);
		return toast;
	};
	  
	/* api */
	service.info = function(messageText) {
		return service.show('info', messageText);
	};

	service.error = function(messageText) {
		return service.show('error', messageText);
	};	  
	  
	return service;
}]);

myMod.factory('tkInterceptorService', function($q, tkToastService) {
	var service = {state: {counter: 0}};
	
	service.request = function(config) {
		// console.log("OnRequest", config);
		service.state.counter++;
		return config;
    };

    service.requestError = function(rejection) {
    	// console.log("OnRequestError", rejection);
    	return $q.reject(rejection);
    };

    service.response = function(response) {
    	// console.log("OnResponse", response);
    	service.state.counter--;
    	return response;
    };

    service.responseError = function(rejection) {
    	// console.log("OnResponseError", rejection);
    	service.state.counter--;
	   
    	if(rejection.status <= 0) tkToastService.error('Network Error / Timeout');   
    	else {
    		tkToastService.error(rejection.data.status + " - " + rejection.data.error);   
    	}
    	return $q.reject(rejection);
    }

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
	  template: '<tk-toast ng-repeat="toast in $ctrl.toasts" tk-model="toast"></lm-ui-toast>',
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
		</div>',
	  bindings: { tkModel: '<' },
	  controller: function() {
		  var ctrl = this;
	  }
});

/* ============= */
/* === UTILS === */
/* ============= */

var tkDefaultApp = function() {
	var app = angular.module('app', ['ngComponentRouter', 'pascalprecht.translate', 'ngSanitize', 'toolkit']);

	app.config(function($locationProvider, $translateProvider, $httpProvider) {
	  $locationProvider.html5Mode(false);
	  $locationProvider.hashPrefix('');
	  
	  $translateProvider.useStaticFilesLoader({prefix: 'i18n/', suffix: '.json'});
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.useSanitizeValueStrategy('sanitize');
	  
	  $httpProvider.interceptors.push('tkInterceptorService');
	});

	app.value('$routerRootComponent', 'app');
	
	return app;
};

