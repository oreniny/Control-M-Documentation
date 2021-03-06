JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Holding a job </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'4396\')}\">\
<h2 id=\"t4396\" class=\"heading2\">Holding a job</h2>\
<p class=\"bodytext\">This procedure describes how to hold a job, which stops the job from Control-M processing and enables you to update the job.</p>\
<p class=\"procedureheading\">To hold a job:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Right-click the service that contains the jobs you want to hold and select <strong class=\"strong\">Browse Jobs</strong>.</li><li class=\"listnumber\">Select the job you want to hold.</li><li class=\"listnumber\">From the <strong class=\"strong\">Actions</strong> drop-down list, select <strong class=\"strong\">Hold</strong>.<p class=\"listcontinue\">The job is on hold and you can now update the job. Control-M Self Service automatically refreshes the jobs at defined intervals.</p>\
</li><li class=\"listnumber\">To view the job details, click one of the tabs in the right pane, as described in <a id=\"h1172\" class=\"jumptemplate\" title=\"Job details\" href=\"545.htm\" target=\"_self\">Job details</a>.</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Jobs_View.htm\" target=\"_self\">Control-M Self Service job management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"4396\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Holding a job\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/25/2016 3:04:25 PM\" />\
</body>\
</html>\
'
});