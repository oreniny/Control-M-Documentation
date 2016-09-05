JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Finding services </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'525\');highlight(\'39802\')}\">\
<h2 id=\"t39802\" class=\"heading2\">Finding services</h2>\
<p class=\"bodytext\">This procedure describes how to find services, which enables you to see the status of specific services.</p>\
<p class=\"procedureheading\">To find services:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">From the <strong class=\"strong\">Status </strong>drop-down list, select the service status that you want to view.</li><li class=\"listnumber\">In the <strong class=\"strong\">Search </strong>field, type the name or part of the name of the service(s) that you want to find.</li><li class=\"listnumber\">Click <img id=\"f39803\" src=\"i_sls_search.png\" class=\"linkedjpegfiletemplate\" alt=\"I_SLS_search\" height=\"27\" width=\"27\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\">.<p class=\"listcontinue\">The services that match the filtered criteria appear.</p>\
</li><li class=\"listnumber\">To view the service details, click one of the tabs in the right pane, as described in <a id=\"h1169\" class=\"jumptemplate\" title=\"Service details\" href=\"531.htm\" target=\"_self\">Service details</a>.</li><li class=\"listnumber\">To view all services, click <strong class=\"strong\">Reset</strong>.</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"39802\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Finding services\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/28/2014 12:54:01 PM\" />\
</body>\
</html>\
'
});