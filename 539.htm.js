JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Confirming a job </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'539\')}\">\
<h2 id=\"t539\" class=\"heading2\">Confirming a job</h2>\
<p class=\"bodytext\">This procedure describes how to confirm a job that is waiting for confirmation, which enables the job to continue running. </p>\
<p class=\"note\"><strong class=\"strong\">NOTE:</strong> If the job is not defined to request user confirmation, you do not need to do this procedure.</p>\
<p class=\"procedureheading\">To confirm a job:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Right-click the service that contains the jobs you want to confirm and select <strong class=\"strong\">Browse Jobs</strong>.</li><li class=\"listnumber\">Select a <strong class=\"strong\">Wait User</strong> job you want to confirm.</li><li class=\"listnumber\">From the <strong class=\"strong\">Actions</strong> drop-down list, select <strong class=\"strong\">Confirm</strong>.<p class=\"listcontinue\">A confirmation message appears.</p>\
</li><li class=\"listnumber\">Click <strong class=\"strong\">Yes</strong>.<p class=\"listcontinue\">The job is confirmed and continues to execute. Control-M Self Service automatically refreshes the jobs at defined intervals.</p>\
</li><li class=\"listnumber\">To view the job details, click one of the tabs in the right pane, as described in <a id=\"h1172\" class=\"jumptemplate\" title=\"Job details\" href=\"545.htm\" target=\"_self\">Job details</a>.</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Jobs_View.htm\" target=\"_self\">Control-M Self Service job management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"539\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Confirming a job\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/25/2016 3:04:56 PM\" />\
</body>\
</html>\
'
});