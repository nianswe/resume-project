function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-username-data").html(`<h2>Pleace enter a GitHub username</h2>`);
        return;
    }
    $("#gh-username-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
            </div>`);
    
}