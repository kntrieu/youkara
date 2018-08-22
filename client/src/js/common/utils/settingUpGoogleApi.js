
function initYoutubeAPI() {
    gapi.client.setApiKey("AIzaSyBmYfgTYJ1e2IJD-ZQTWSDcb1sKUwIs3Mk");
    gapi.client.load("youtube", "v3", function() {
        console.log("Youtube API is ready");
    });
}