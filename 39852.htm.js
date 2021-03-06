JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Comparing archived data </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'39852\')}\">\
<h2 id=\"t39852\" class=\"heading2\">Comparing archived data</h2>\
<p class=\"bodytext\">This procedure describes how to compare what was modified, added, or removed between two archived jobs (job log and output).</p>\
<p class=\"procedureheading\">To compare archived  jobs:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Right-click the service that contains the jobs you want to search for and select <strong class=\"strong\">Browse Jobs</strong>.</li><li class=\"listnumber\">Perform a search, as described in Searching for archive data.</li><li class=\"listnumber\">Select two jobs that you want to compare.</li><li class=\"listnumber\">From the <strong class=\"strong\">Compare </strong>drop-down list,<strong class=\"strong\"> </strong>select one of the following:<ul class=\"listbullet2\"><li class=\"listbullet2\"><strong class=\"strong\">Log</strong></li><li class=\"listbullet2\"><strong class=\"strong\">Output</strong></li></ul><p class=\"listcontinue\">The <strong class=\"strong\">Compare </strong>window appears highlighting the differences between the two jobs.</p>\
</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Jobs_View.htm\" target=\"_self\">Control-M Self Service job management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"39852\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Comparing archived data\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/25/2016 4:52:53 PM\" />\
</body>\
</html>\
'
});