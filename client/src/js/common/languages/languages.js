
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