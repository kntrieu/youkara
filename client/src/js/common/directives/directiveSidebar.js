
/**
 * Directive side bar
 * Created by kntrieu
 * Date created: August 08, 2018
 * Usage <k-sidebar></k-sidebar>
 */

angular.module('knt')

    .directive('kSidebar', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {

            },
            templateUrl: "ui/views/common/templates/partials/k-sidebar.html",

            link: function (scope, link, attrs) {
                $(document).ready(function () {
                    $('.sidenav').sidenav();
                });
            }
        };
    }]);