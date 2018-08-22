/* file name   : controllerKaraoke
*  author      : kntrieu
*  Date created: August 17, 2018
*/

angular.module('k-ui.karaoke')

    .controller('karaokeCtrl', ['$scope', 'COLLECTION_TYPE', 'CONSTANTS', function ($scope, COLLECTION_TYPE, CONSTANTS) {
        //Define global variables
        $scope.CONSTANTS = CONSTANTS;
    }])