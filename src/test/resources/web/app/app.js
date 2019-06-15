var app = tkDefaultApp();

app.factory('client', ['$http', function($http) {
	return {
		// System
		systemShutdown: () => $http.post('/api/system/shutdown'),
		systemSleep: () => $http.get('/api/system/sleep'),
		systemFail: () => $http.get('/api/system/fail'),
	}
}]);



app.component('app', {
	templateUrl: 'app/app.html',
	bindings: { $router: '<' },
	$routeConfig: [
		{path: '/home',   name: 'Home',   component: 'pageHome', useAsDefault: true},
		{path: '/test',   name: 'Test',   component: 'pageTest'}
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
