JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Welcome </title>\
<script type=\"text/javascript\">\
        function isTOCLoaded() {\
            /* this function for loading the topic within the application if loaded by itself */\
            /* i.e. open the topic .htm file or as search engines link */\
            var url = window.location.href;\
            var baseUrl = url.substring(0, url.lastIndexOf(\"/\") + 1);\
            var topicFile = url.substring(url.lastIndexOf(\"/\") + 1);\
            var newUrl = baseUrl + \"index.htm#\" + topicFile;\
            location.href = newUrl;\
            return false;\
        }\
</script>\
</head>\
<body  onload=\"if (isTOCLoaded()) {highlight(\'69353\')}\">\
<h1 id=\"t69353\" class=\"heading1\">Welcome</h1>\
<p class=\"bodytext\"><img id=\"f69355\" src=\"splash_sls.png\" class=\"linkedjpegfiletemplate\" alt=\"SPLASH_SLS\" height=\"349\" width=\"921\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"69353\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Welcome\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:35:30 PM\" />\
</body>\
</html>\
'
});