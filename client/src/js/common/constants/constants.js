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