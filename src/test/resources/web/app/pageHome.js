app.component('pageHome', {
  templateUrl: 'app/pageHome.html',
  bindings: {},
  controller: function(client, tkToastService, tkUserService) {
	  var ctrl = this;
	  
	  ctrl.shutdown = function() {
		  client.shutdown();
	  };

	  ctrl.sleep = function() {
		  client.sleep();
	  };
	  
	  ctrl.authProbe = function() {
		  client.probe();
	  };
	  
	  ctrl.authClear = function() {
		  tkUserService.clear();
	  };
	  
	  ctrl.errorNotFound = function() {
		  client.errorNotFound();
	  };
	  
	  ctrl.errorKnown = function() {
		  client.errorKnown();
	  };

	  ctrl.errorUnknown = function() {
		  client.errorUnknown();
	  };
	  
	  ctrl.errorDetails = function() {
		  client.errorDetails();
	  };	  
	  
	  ctrl.toastInfo = function() {
		  tkToastService.info('Some info message');
	  };

	  ctrl.toastError = function() {
		  tkToastService.error('Some error message');
	  };	  
  }
});
