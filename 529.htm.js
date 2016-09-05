JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Viewing the history of services </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'525\');highlight(\'529\')}\">\
<h2 id=\"t529\" class=\"heading2\">Viewing the history of services</h2>\
<p class=\"bodytext\">This procedure describes how to view the history of services, which enables you to see the status and service details of specific services from a previous date.</p>\
<p class=\"procedureheading\">To view the history of services:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Click <img id=\"f551\" src=\"show_history.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"23\" width=\"104\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\">.<p class=\"listcontinue\">The <strong class=\"strong\">Service History View </strong>appears.</p>\
</li><li class=\"listnumber\">In the <strong class=\"strong\">Date </strong>field, click <img id=\"f563\" src=\"service_date.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"20\" width=\"20\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"> and select the date that you want to view.<p class=\"listcontinue\">The services that match your criteria appear.</p>\
</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"529\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Viewing the history of services\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:48 PM\" />\
</body>\
</html>\
'
});