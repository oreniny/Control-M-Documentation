JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Restart job parameters </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39673\');highlight(\'4397\')}\">\
<h2 id=\"t4397\" class=\"heading2\">Restart job parameters</h2>\
<p class=\"bodytext\">The following table describes Restart job parameters for Control-M for z/OS jobs. To define Restart job parameters, see <a id=\"h1185\" class=\"jumptemplate\" title=\"Restarting a job\" href=\"540.htm\" target=\"_self\">Restarting a job</a>.</p>\
<p class=\"tabletitle\">Restart job dialog box</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"184\"><p class=\"tableheading\">Field</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"368\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">From Step/Proc</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Determines the job restart point of the <strong class=\"strong\">pgmstep </strong>and <strong class=\"strong\">procstep </strong>steps.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">To Step/Proc</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Determines the job restart end point of the <strong class=\"strong\">pgmstep </strong>and <strong class=\"strong\">procstep </strong>steps.</p>\
<p class=\"tablebodytext\">If a <strong class=\"strong\">from step/proc</strong>  value is defined, and the <strong class=\"strong\">To step/proc</strong> field is blank, the job reruns up to and including the last step.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Recapture Abend Codes</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Determines whether to save the Abend codes from the original job execution</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Recapture Cond Codes</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Determines whether to save the condition codes from the original job execution</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Step Adjustment</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Determines whether to enable automatic Step Adjustment. For more details about Step Adjustment, see the<em class=\"emphasis\"> </em>Control-M/Restart <em class=\"emphasis\">User Guide</em>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Restart Parm Member Name</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Defines the name of the member that contains control parameters for the job to restart (1-8 characters only). The default value is the member that contains the JCL of the job.</p>\
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
<input id=\"topicId\" type=\"hidden\" value=\"4397\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Restart job parameters\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:50 PM\" />\
</body>\
</html>\
'
});