JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Job details </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'72422\')}\">\
<h2 id=\"t72422\" class=\"heading2\">Job details</h2>\
<p class=\"bodytext\">The following table describes the details of each tab in the Jobs view in Control-M Self Service.</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"184\"><p class=\"tableheading\">Tab</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"368\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">General</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows fields such as, start time and end time, order ID, order date, status, attributes of the selected job, as described in <a id=\"h1190\" class=\"jumptemplate\" title=\"Job General tab\" href=\"546.htm\" target=\"_self\">Job General tab</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Log</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the activity log of the selected job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Waiting Info</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the reasons why the job did not run.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Output</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the different outputs of the selected job. To view, see <a id=\"h1191\" class=\"jumptemplate\" title=\"Viewing job output\" href=\"547.htm\" target=\"_self\">Viewing job output</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Statistics</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the statistics of the selected job, as described in <a id=\"h1192\" class=\"jumptemplate\" title=\"Statistics tab\" href=\"548.htm\" target=\"_self\">Statistics tab</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Script</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the script of the selected job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Variables</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the defined variables and values of the selected job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Applications</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the fields and values of the specific application job form.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Documentation</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows a description related to the job, and is saved in a defined location. The Documentation area includes information about where to find the Documentation.</p>\
<p class=\"tablebodytext\">In a z/OS job, the Documentation is in a Doc Member located in a Doc Library.</p>\
<p class=\"tablebodytext\">In a non-z/OS job, the Documentation depends on whether the type is File or URL:</p>\
<ul class=\"tablelistbullet\"><li class=\"tablelistbullet\">For a file, the description is located in a file located in a file path.</li><li class=\"tablelistbullet\">For a URL, the Documentation is located in a URL address.</li></ul></td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Services</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the service this jobs belongs to, the services that this job is dependent on, and the services that depend on this job.</p>\
</td>\
</tr>\
\
</table>\
<p class=\"bodytext\"></p>\
<table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Jobs_View.htm\" target=\"_self\">Control-M Self Service job management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"72422\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Job details\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 7/2/2015 10:57:08 AM\" />\
</body>\
</html>\
'
});