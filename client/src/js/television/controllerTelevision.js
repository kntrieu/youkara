/* file name   : televisionCtrl
*  author      : kntrieu
*  Date created: August 17, 2018
*/

angular.module('k-ui.television')

    .controller('televisionCtrl', ['$scope', 'COLLECTION_TYPE', 'CONSTANTS', function ($scope, COLLECTION_TYPE, CONSTANTS) {
        //Define global variables
        $scope.CONSTANTS = CONSTANTS;
    }])