JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Holding a service </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'525\');highlight(\'527\')}\">\
<h2 id=\"t527\" class=\"heading2\">Holding a service</h2>\
<p class=\"bodytext\">This procedure describes how to hold a service, which stops the service from Control-M processing and enables you to fix any problems that might have occurred.</p>\
<p class=\"note\"><strong class=\"strong\">NOTE:</strong> You cannot hold a BMC Batch Impact Manager service or any service that is not based on a job or a SMART folder. For more information, contact your Control-M Administrator.</p>\
<p class=\"procedureheading\">To hold a service:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Select a service that you want to hold.</li><li class=\"listnumber\">From the <strong class=\"strong\">Actions</strong> drop-down list, select <strong class=\"strong\">Hold</strong>.<p class=\"listcontinue\">Control-M Self Service automatically refreshes the services at defined intervals.</p>\
<p class=\"listcontinue\">A Hold icon appears on the service and is no longer running.</p>\
</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"527\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Holding a service\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:47 PM\" />\
</body>\
</html>\
'
});