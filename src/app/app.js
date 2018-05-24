'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  
  'BlurAdmin.common',
  'BlurAdmin.theme',
  'BlurAdmin.pages'
])
.config(['$httpProvider', '$sceDelegateProvider', function ($httpProvider, $sce) {
 
  
	// override security because our HTML templates violate CORS
	$sce.resourceUrlWhitelist(['**']);

	// enable CORS
	$httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  // should only run during DEV
  $httpProvider.interceptors.push('devInterceptor');
}]);