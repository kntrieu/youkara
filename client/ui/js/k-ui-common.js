/**
 * Constants
 * Created by kntrieu
 * Date created: March 13, 2017
 */
angular.module('knt')

.constant('COLLECTION_TYPE',{
    BASIC: 0,
    AVATAR_CONTENT: 1,
})

.constant('CONSTANTS', {
    IMAGE: {
        AVATAR_DEFAULT: 'ui/images/user_default.png'
    },

    DRT_CARDS: {
        BASIC: 0,
        IMG: 1,
        FAB: 2,
        HORIZONTAL: 3,
        REVEAL: 4,
        TABS: 5,
    },

    YOUTUBE_API_CONFIG: {
        CLIENT_ID: '1087303386594-d2kio0qsun6vbm98ob6va7fmnjbcil2e.apps.googleusercontent.com',
        API_URL: "https://www.googleapis.com/auth/youtube"
    }
})

angular.module('knt')
    /**
     * This controller was created for handling some function in master page
     */
    .controller('baseCtrl', ['$scope', '$translate', 'COLLECTION_TYPE', 'CONSTANTS', function ($scope, $translate, COLLECTION_TYPE, CONSTANTS) {
        /* --------- Region for setting up YOUTUBE APIS --------- */
        /* --------- Region for setting up YOUTUBE APIS --------- */
    }]);

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
/**
 * Directive card tab
 * Created by kntrieu
 * Date created: March 13, 2017
 * Usage <k-card-tab></k-card-tab>
 */

angular.module('knt')

    .directive('kCardTab', ['$translate', function ($translate) {
        return {
            restrict: "EA",
            scope: {
                data: "=",
            },

            templateUrl: "ui/views/common/templates/partials/k-card-tab.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */



                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('ul.tabs').tabs({
                        swipeable: true,
                    });
                });

            }
        };
    }]);
/**
 * Directive carousel
 * Created by kntrieu
 * Date created: March 18, 2017
 * Usage <k-carousel></k-cảousel>
 */

angular.module('knt')

    .directive('kCarousel', ['$translate', function ($translate) {
        return {
            restrict: "EA",
            scope: {
                data: "=",
            },

            templateUrl: "ui/views/common/templates/partials/k-carousel.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */



                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.carousel.carousel-slider').carousel({ fullWidth: true });
                    setInterval(function(){ 
                        $('.carousel.carousel-slider').carousel('next');
                    }, 5000);
                });

            }
        };
    }]);

/**
 * Directive collapsible
 * Created by kntrieu
 * Date created: March 12, 2017
 * Usage <k-collapse></k-collapse>
 */

angular.module('knt')

    .directive('kCollapse', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                data: "=",
                headerColor: "@?"
            },

            transclude: {
                'body': '?collapseBody',
            },
            templateUrl: "ui/views/common/templates/partials/k-collapse.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */
                scope.headerColor = angular.isUndefined(scope.headerColor) ? "#29B6F6" : scope.headerColor;


                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.collapsible').collapsible();
                });

            }
        };
    }]);

/**
 * Directive cpllections
 * Created by kntrieu
 * Date created: March 13, 2017
 * Usage <k-collection></k-collection>
 */

angular.module('knt')

    .directive('kCollection', ['$translate', 'COLLECTION_TYPE', 'CONSTANTS', function ($translate, COLLECTION_TYPE, CONSTANTS) {
        return {
            restrict: "AE",
            scope: {
                data:      "=",
                type:      "=?",
                direction: "@?",
                id:        "@"
            },
            templateUrl: "ui/views/common/templates/partials/k-collections.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */
                var directions        = ["up", "down", "left", "right"];
                scope.COLLECTION_TYPE = COLLECTION_TYPE;
                scope.CONSTANTS       = CONSTANTS;

                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    if(scope.direction && directions.indexOf(scope.direction) > -1) {
                        $('.' + scope.id).marquee({
                            duration: 5000,
                            direction: scope.direction,
                            duplicated: true,
                            gap: "10px",
                            allowCss3Support: true,
                            pauseOnHover: true,
                            startVisible: true
                        });
                    }
                });

            }
        };
    }]);

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

/**
 * Directive multi collapsible
 * Created by kntrieu
 * Date created: March 20, 2017
 * Usage <k-multi-collapse></k-multi-collapse>
 */

angular.module('knt')

    .directive('kMultiCollapse', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                data: "=",
                headerColor: "@?"
            },

            transclude: {
                'body': '?collapseBody',
            },
            templateUrl: "ui/views/common/templates/partials/k-multi-collapse.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */
                scope.headerColor = angular.isUndefined(scope.headerColor) ? "#29B6F6" : scope.headerColor;


                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.collapsible').collapsible();
                });

            }
        };
    }]);

/**
 * Directive nav bar
 * Created by kntrieu
 * Date created: March 09, 2017
 * Usage <k-navbar nav-list="navListObj"></k-navbar>
 */

angular.module('knt')

    .directive('kNavbar', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                navList: '=',
            },
            templateUrl: "ui/views/common/templates/partials/k-navbar.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */

                scope.subNavList = [];
                scope.lang = "vi";

                angular.forEach(scope.navList, function (item, index) {
                    if (item.subMenu.length > 0) {
                        scope.subNavList.push(item.subMenu);
                    }
                });

                /**
                 * Functionality
                 */
                $(document).ready(function () {

                    // set up side nav
                    $(".button-collapse").sideNav({
                        draggable: true,
                    });

                    // dropdown toggle
                    $(".dropdown-button").dropdown({
                        hover: true,
                        belowOrigin: true,
                        constrainWidth: false,
                        gutter: 1
                    });
                });

                scope.changeLanguage = function () {
                    scope.lang = scope.lang === "vi" ? "en" : "vi";
                    $translate.use(scope.lang);
                };

            }
        };
    }]);

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

/**
 * Directive Slide show
 * Created by kntrieu
 * Date created: March 10, 2017
 * Usage <k-slideshow></k-slideshow>
 */

angular.module('knt')

    .directive('kSlideshow', ['$translate', function ($translate) {
        return {
            restrict: "AE",
            scope: {
                slideItems: "=",
            },
            templateUrl: "ui/views/common/templates/partials/k-slideshow.html",

            link: function (scope, link, attrs) {
                /**
                 * Define globle variables
                 */


                /**
                 * Functionality
                 */
                $(document).ready(function () {
                    $('.slider').slider({
                        indicators: false,
                    });
                });

            }
        };
    }]);
// REQUIRES:
// moment.js - http://momentjs.com/

// USAGE:
// {{ someDate | moment: [any moment function] : [param1] : [param2] : [param n] 

// EXAMPLES:
// {{ someDate | moment: 'format': 'MMM DD, YYYY' }}
// {{ someDate | moment: 'fromNow' }}

// To call multiple moment functions, you can chain them.
// For example, this converts to UTC and then formats...
// {{ someDate | moment: 'utc' | moment: 'format': 'MMM DD, YYYY' }}

//Author: Charlie Martin
//Visit: https://gist.github.com/cmmartin

// Thank you Martin! :-) (from kntrieu)

angular.module('knt')
.filter('moment', function () {
  return function (input, momentFn /*, param1, param2, ...param n */) {
    var args = Array.prototype.slice.call(arguments, 2),
        momentObj = moment(input);
    return momentObj[momentFn].apply(momentObj, args);
  };
});

/**
 * Language file
 * Supported Languages: 
 * 1. Vietnamese (vi)
 * 2. English (en)
 * 3. Khmer (km)
 */

angular.module('knt')

    .config(function ($translateProvider) {

        $translateProvider.translations('en', {
            MENU_ITEM: {
                HOME: "Home",
                CONTACT: "Contact",
                ABOUT: "About",
                ABOUT_SCHOOL: "About school",
                ABOUT_HISORY: "School history",
                ABOUT_FACILITIES: "School facilities"
            },

            SIDE_BAR_WIDGET: {
                NEWS: "News",
                WORKING_SCHEDULE: "Working schedule",
                STUDENT_SCHEDULE: "Student schedule",
                SCHOOL_NEWS: "School news",
                TEACHER_DOCS: "Teacher documents",
                STUDENT_DOCS: "Student documents",
                DOCS: "Documents",
                YOUTH_GROUP: "Youth group information",
                EXAM_RESULT: "Exam result",
                VIDEO: "Video",
                FRIENDS: "Friends"
            },

            SEARCH: "Search",

            MAIN_BAR: {
                SEARCH_PLACE_HOLDER: 'Search...',
                LOGIN_TITLE: "Login",
                LOGOUT_TITLE: "Logout",
                MY_PROFILE_TITLE: "My profile",
                SETTING_TITLE: "Setting",
                MENU_TITLE: "Menu"
            },
            SIDE_BAR: {
                HOME: 'Home',
                TRENDING: "Trending",
                YOUR_PLAYLIST: "Your playlists",
                HELP: "Help",
                FEED_BACK: "Send feedback"
            },

            HOME_CARD: {
                TV: {
                    TITLE: 'Watch TV',
                    LINK_TITLE: 'Watch now',
                    DESCRIPTION: 'Click here to watch TV'
                },

                KARAOKE: {
                    TITLE: 'Karaoke',
                    LINK_TITLE: 'Let\'s try it',
                    DESCRIPTION: 'You can create a remote control and the playlist for singing'
                }
            }
        });

        $translateProvider.translations('vi', {
            MENU_ITEM: {
                HOME: "Trang chủ",
                CONTACT: "Liên hệ",
                ABOUT: "Giới thiệu",
                ABOUT_SCHOOL: "Giới thiệu về trường",
                ABOUT_HISORY: "Lịch sử của trường",
                ABOUT_FACILITIES: "Cơ sở vật chất",
            },

            SIDE_BAR_WIDGET: {
                NEWS: "Tin tức - sự kiện",
                WORKING_SCHEDULE: "Lịch công tác",
                STUDENT_SCHEDULE: "Thời khóa biểu",
                SCHOOL_NEWS: "Thông Báo",
                TEACHER_DOCS: "Thông tin giáo viên",
                STUDENT_DOCS: "Thông tin học sinh",
                DOCS: "Tài liệu",
                YOUTH_GROUP: "Thông tin đoàn thanh niên",
                EXAM_RESULT: "Kết quả thi",
                VIDEO: "Video",
                FRIENDS: "Đơn vị Kết Nghĩa"
            },

            SEARCH: "Tìm kiếm",

            MAIN_BAR: {
                SEARCH_PLACE_HOLDER: 'Tìm kiếm bài hát',
                LOGIN_TITLE: "Đăng nhập",
                LOGOUT_TITLE: "Đăng xuất",
                MY_PROFILE_TITLE: "Tài khoản của tôi",
                SETTING_TITLE: "Cài đặt",
                MENU_TITLE: "Menu"
            },

            SIDE_BAR: {
                HOME: 'Trang chủ',
                TRENDING: "Xu hướng",
                YOUR_PLAYLIST: "Danh sách phát",
                HELP: "Trợ giúp",
                FEED_BACK: "Gửi phản hồi"
            },

            HOME_CARD: {
                TV: {
                    TITLE: 'Xem TV',
                    LINK_TITLE: 'Xem ngay',
                    DESCRIPTION: 'Click vào đây để xem TV, bạn có quyền tạo một điều khiển từ xa để điều khiển smartTV của mình'
                },

                KARAOKE: {
                    TITLE: 'Hát Karaoke',
                    LINK_TITLE: 'Hát ngay',
                    DESCRIPTION: 'Hãy tận hưởng những giây phút bên bạn bè và người thân của mình với chức năng hát karaoke này. Bạn có thể tạo điều khiển từ xa, tạo playlist để biết ai là người hát tiếp theo.'
                }
            }
        });

        $translateProvider.translations('km', {
            MENU_ITEM: {
                HOME: "ទំព័រដើម",
                CONTACT: "បាន​ភ្ជាប់"
            }
        });

        $translateProvider.preferredLanguage('vi');
        $translateProvider.useSanitizeValueStrategy('escape');
    });

function initYoutubeAPI() {
    gapi.client.setApiKey("AIzaSyBmYfgTYJ1e2IJD-ZQTWSDcb1sKUwIs3Mk");
    gapi.client.load("youtube", "v3", function() {
        console.log("Youtube API is ready");
    });
}

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