JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Restarting a job </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'540\')}\">\
<h2 id=\"t540\" class=\"heading2\">Restarting a job</h2>\
<p class=\"bodytext\">This procedure describes how to restart a Control-M for z/OS job from a specific state.</p>\
<p class=\"procedureheading\">To restart a job:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Right-click the service that contains the Control-M for z/OS job you want to restart and select <strong class=\"strong\">Browse Jobs</strong>.</li><li class=\"listnumber\">Select the Control-M/for z/OS job you want to restart.</li><li class=\"listnumber\">From the <strong class=\"strong\">Actions</strong> drop-down list, select <strong class=\"strong\">Restart</strong>.<p class=\"listcontinue\">The <strong class=\"strong\">Restart job</strong> dialog box appears.</p>\
</li><li class=\"listnumber\">For each field, type the required value, as described in <a id=\"h4398\" class=\"jumptemplate\" title=\"Restart job parameters\" href=\"4397.htm\" target=\"_self\">Restart job parameters</a>.</li><li class=\"listnumber\">Click<strong class=\"strong\"> Yes.</strong><p class=\"listcontinue\">The Control-M/for z/OS job restarts. Control-M Self Service automatically refreshes the jobs at defined intervals.</p>\
</li><li class=\"listnumber\">To view the job details, click one of the tabs in the right pane, as described in <a id=\"h1172\" class=\"jumptemplate\" title=\"Job details\" href=\"545.htm\" target=\"_self\">Job details</a>.</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Jobs_View.htm\" target=\"_self\">Control-M Self Service job management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"540\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Restarting a job\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/25/2016 3:05:53 PM\" />\
</body>\
</html>\
'
});