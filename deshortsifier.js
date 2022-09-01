function isYoutubeShortsUrl(url) {
    return url.includes("/shorts/");
}

function redirectToCorrectUrl(shortsUrl) {
    correctedUrl = shortsUrl.replace("shorts/", "watch?v=");
    window.location.replace(correctedUrl);
}

window.setInterval(() => {
    var currentUrl = window.location.href;
    if (isYoutubeShortsUrl(currentUrl)) {
        redirectToCorrectUrl(currentUrl);
    }
}, 500);
