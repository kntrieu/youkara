/* file name   : controllerSample
*  author      : kntrieu
*  Date created: March 5, 2017
*/

angular.module('k-ui.home')

    .controller('homeCtrl', ['$scope', 'COLLECTION_TYPE', 'CONSTANTS', '$translate', 
    function ($scope, COLLECTION_TYPE, CONSTANTS, $translate) {
        //Define global variables
        $scope.homeScreenCards = [
            {
                title: $translate.instant('HOME_CARD.TV.TITLE'),
                thumb: 'ui/images/card-thumb/tv.jpg',
                url: {
                    'title': $translate.instant('HOME_CARD.TV.LINK_TITLE'),
                    'url': '/#!/television'
                },
                description: $translate.instant('HOME_CARD.TV.DESCRIPTION'),
            },

            {
                title: $translate.instant('HOME_CARD.KARAOKE.TITLE'),
                thumb: 'ui/images/card-thumb/kara.jpg',
                url: {
                    'title': $translate.instant('HOME_CARD.KARAOKE.LINK_TITLE'),
                    'url': '/#!/karaoke'
                },
                description: $translate.instant('HOME_CARD.KARAOKE.DESCRIPTION')
            }
        ];

        $scope.CONSTANTS = CONSTANTS;
    }])
/* file name   : televisionCtrl
*  author      : kntrieu
*  Date created: August 17, 2018
*/

angular.module('k-ui.television')

    .controller('televisionCtrl', ['$scope', 'COLLECTION_TYPE', 'CONSTANTS', function ($scope, COLLECTION_TYPE, CONSTANTS) {
        //Define global variables
        $scope.CONSTANTS = CONSTANTS;
    }])
/* file name   : controllerKaraoke
*  author      : kntrieu
*  Date created: August 17, 2018
*/

angular.module('k-ui.karaoke')

    .controller('karaokeCtrl', ['$scope', 'COLLECTION_TYPE', 'CONSTANTS', function ($scope, COLLECTION_TYPE, CONSTANTS) {
        //Define global variables
        $scope.CONSTANTS = CONSTANTS;
    }])