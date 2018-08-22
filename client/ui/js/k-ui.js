// define list of modules (pages) here

angular.module('k-ui.common', []);

//module of page home
angular.module('k-ui.home', []);
//module of page television
angular.module('k-ui.television', []);
//module of page karaoke
angular.module('k-ui.karaoke', []);



// Define a global guard app which includes the above

var knt = angular.module('knt', [
    'pascalprecht.translate',
    'ngRoute',
    'k-ui.common',
    'k-ui.home',
    'k-ui.television',
    'k-ui.karaoke'
]);

