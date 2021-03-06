JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Duplicating archive Search results </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'39527\')}\">\
<h2 id=\"t39527\" class=\"heading2\">Duplicating archive Search results</h2>\
<p class=\"bodytext\">This procedure describes how to duplicate archive search results from the current tab to another tab.This enables you to perform another search with very similar search criteria without losing your original search results.</p>\
<p class=\"procedureheading\">To duplicate archive search results:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Right-click the service that contains the jobs you want to search for and select <strong class=\"strong\">Browse Jobs</strong>.</li><li class=\"listnumber\">Perform a search, as described in <a id=\"h39528\" class=\"jumptemplate\" title=\"Searching for archive data\" href=\"SLS_Archive_Home.htm\" target=\"_self\">Searching for archive data</a>.</li><li class=\"listnumber\">Click <strong class=\"strong\">Duplicate Search</strong>.<p class=\"listcontinue\">The duplicated archive search results appear in another tab.</p>\
</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Jobs_View.htm\" target=\"_self\">Control-M Self Service job management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"39527\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Duplicating archive Search results\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/25/2016 4:52:07 PM\" />\
</body>\
</html>\
'
});