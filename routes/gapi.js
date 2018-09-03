var express = require('express');
var path = require('path');
var router = express.Router();
var googleApiKey = require('../config/google-api');

//Config google API
const { google } = require('googleapis');

const youtubeApi = google.youtube({
    version: 'v3',
    auth: googleApiKey.API_KEY_1 // specify your API key here
});



//Testing api
router.get('/gapi/search', function (req, res, next) {
    var keyword = req.param('keyword');
    var params = {
        'maxResults': '25',
        'part': 'snippet',
        'q': keyword,
        'type': 'test1'
    };

    youtubeApi.search.list(params, function (err, response) {
        if (err) {
            res.send(err);
        }
        
        res.json(response.data);
    });
});

module.exports = router;