
/**
 * Routes
 * Created by kntrieu
 * Date created: March 09, 2017
 */
angular.module('knt')

.config(function($routeProvider, $locationProvider) {
   $routeProvider
    .when("/", {
        templateUrl: 'ui/views/home/templates/index.html',
    })
	.when("/television", {
        templateUrl: 'ui/views/television/templates/index.html',
    })
    .when("/karaoke", {
        templateUrl: 'ui/views/karaoke/templates/index.html',
    })
    .otherwise({
        templateUrl: 'ui/views/home/templates/index.html',
    });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});