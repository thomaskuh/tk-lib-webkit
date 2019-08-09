var app = tkDefaultApp();

app.factory('client', ['$http', function($http) {
	return {
		shutdown: () => $http.post('/api/shutdown'),
		sleep: () => $http.get('/api/sleep'),
		probe: () => $http.get('/api/probe'),
		errorNotFound: () => $http.get('/api/errorNotFound'),
		errorKnown: () => $http.get('/api/errorKnown'),
		errorUnknown: () => $http.get('/api/errorUnknown'),
		errorDetails: () => $http.get('/api/errorDetails')
	}
}]);



app.component('app', {
	templateUrl: 'app/app.html',
	bindings: { $router: '<' },
	$routeConfig: [
		{path: '/home',   name: 'Home',   component: 'pageHome', useAsDefault: true},
		{path: '/login',  name: 'Login',   component: 'tkLoginForm'}
	],
	controller: function($scope, $location, $element) {
		var ctrl = this;
		ctrl.path = '';

		ctrl.toggle = function() {
			$element.find('.navbar-burger').toggleClass("is-active");
			$element.find('.navbar-menu').toggleClass("is-active");
		};
		
		$scope.$on('$routeChangeSuccess', function(scope, current, pre) {
			ctrl.path = $location.path();
		});
	}
});
