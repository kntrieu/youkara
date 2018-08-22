
/**
 * Directive main bar
 * Created by kntrieu
 * Date created: August 07, 2017
 * Usage <k-mainbar></k-mainbar>
 */

angular.module('knt')

    .directive('kMainbar', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                
            },
            templateUrl: "ui/views/common/templates/partials/k-mainbar.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */
                $(document).ready(function(){
                    $('.dropdown-trigger').dropdown({
                        container: ".k-mainbar",
                        coverTrigger: false,
                    });
                });
            }
        };
    }]);