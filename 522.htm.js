JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Control-M Self Service navigation </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39157\');highlight(\'522\')}\">\
<h2 id=\"t522\" class=\"heading2\">Control-M Self Service navigation</h2>\
<p class=\"bodytext\">Control-M Self Service is divided into the following two views:</p>\
<ul class=\"listbullet\"><li class=\"listbullet\"><strong class=\"strong\">Service view</strong>: Services appear on the left in List view or Tile view and service details appear in the right pane based on the selected service, as described in <a id=\"h1170\" class=\"jumptemplate\" title=\"Service view\" href=\"523.htm\" target=\"_self\">Service view</a>.</li><li class=\"listbullet\"><strong class=\"strong\">Jobs view</strong>: Jobs appear on the left after double-clicking a service and shows jobs in List view or Tile view and job details appear in the right pane based on the selected job, as described in <a id=\"h1171\" class=\"jumptemplate\" title=\"Jobs view\" href=\"524.htm\" target=\"_self\">Jobs view</a>.</li></ul><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"521.htm\" target=\"_self\">Introduction to Control-M Self Service</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"522\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Control-M Self Service navigation\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:47 PM\" />\
</body>\
</html>\
'
});