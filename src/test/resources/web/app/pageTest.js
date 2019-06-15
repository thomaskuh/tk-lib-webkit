app.component('pageTest', {
  templateUrl: 'app/pageTest.html',
  bindings: {},
  controller: function(client, tkToastService) {
	  var ctrl = this;
	  
	  ctrl.shutdown = function() {
		  client.systemShutdown();
	  };

	  ctrl.sleep = function() {
		  client.systemSleep();
	  };

	  ctrl.fail = function() {
		  client.systemFail();
	  };
	  
	  ctrl.toastInfo = function() {
		  tkToastService.info('Some info message');
	  };

	  ctrl.toastError = function() {
		  tkToastService.error('Some error message');
	  };
	  
	  
  }
});
