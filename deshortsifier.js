var url = new URL(window.location.href);

var correctedPathname = url.pathname.replace("shorts/", "watch?v=");
var correctedHref = url.protocol + "//" + url.hostname + correctedPathname;

window.location.replace(correctedHref);
