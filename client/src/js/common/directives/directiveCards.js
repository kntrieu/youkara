
/**
 * Directive side bar
 * Created by kntrieu
 * Date created: August 08, 2018
 * Usage <cards></cards>
 */

angular.module('knt')

    .directive('cards', ['$translate', 'CONSTANTS', function ($translate, CONSTANTS) {
        return {
            restrict: "AE",
            scope: {
                type: "=",
                options: "=",
                card: "="
            },
            templateUrl: "ui/views/common/templates/partials/k-cards.html",

            link: function (scope, link, attrs) {
                scope.CONSTANTS = CONSTANTS;
            }
        };
    }]);