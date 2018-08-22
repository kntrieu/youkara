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