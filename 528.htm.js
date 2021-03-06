JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Releasing a service </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'525\');highlight(\'528\')}\">\
<h2 id=\"t528\" class=\"heading2\">Releasing a service</h2>\
<p class=\"bodytext\">This procedure describes how to release a service from a Hold state, which enables the service to run.</p>\
<p class=\"note\"><strong class=\"strong\">NOTE:</strong> You cannot release a service that is not based on a job or a SMART folder. For more information, contact your Control-M Administrator.</p>\
<p class=\"procedureheading\">To release a service:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Select a held service that you want to release.</li><li class=\"listnumber\">From <strong class=\"strong\">Actions</strong> drop-down list, select <strong class=\"strong\">Release</strong>.<p class=\"listcontinue\">Control-M Self Service automatically refreshes the services at defined intervals.</p>\
<p class=\"listcontinue\">The Hold icon disappears from the service and the service is now available to continue running.</p>\
</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"528\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Releasing a service\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:48 PM\" />\
</body>\
</html>\
'
});