/* file name   : userCtrl
*  author      : kntrieu
*  Date created: September 3, 2018
*/

angular.module('k-ui.user')

    .controller('userCtrl', ['$scope', 'COLLECTION_TYPE', 'CONSTANTS', '$translate',
        function ($scope, COLLECTION_TYPE, CONSTANTS, $translate) {
        //Define global variables
        $scope.CONSTANTS = CONSTANTS;
    }])