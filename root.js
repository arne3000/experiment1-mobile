var myapp = angular.module('myapp', ["ui.router", "ui.bootstrap", "ngTouch", "firebase"]);

myapp.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to index
  $urlRouterProvider.otherwise("/") 

 
  // Now set up the states
 $stateProvider
    .state('index', {
    	url: "/",
	    templateUrl: 'page/main/template.html',
	    controller: 'Main_Controller'
    });
});