JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Job General tab </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'72422\');expand(\'39673\');highlight(\'47329\')}\">\
<h3 id=\"t47329\" class=\"heading3\">Job General tab</h3>\
<p class=\"bodytext\">The following table describes the basic parameters for the selected job.</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"186\"><p class=\"tableheading\">Parameter</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"366\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Run As</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the name of a user with authorized to run the job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Run Where</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the host ID and host group of the job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Status</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows one of the following possible statuses:</p>\
<ul class=\"tablelistbullet\"><li class=\"tablelistbullet\">Failure/Error</li><li class=\"tablelistbullet\">Ended OK</li><li class=\"tablelistbullet\">Executing</li><li class=\"tablelistbullet\">Unknown</li><li class=\"tablelistbullet\">Wait Condition</li><li class=\"tablelistbullet\">Wait Resource</li><li class=\"tablelistbullet\">Wait User</li></ul></td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Start Time</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the timestamp when the job started to run.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">End Time</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the timestamp when the job stopped running.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Execution Time</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the number of seconds that it takes to run the job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Order ID</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the Order ID number.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Order Date</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the date that the job was ordered.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Description</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows a description of the job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Job Type</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows one of the following possible job types:</p>\
<ul class=\"tablelistbullet\"><li class=\"tablelistbullet\">OS</li><li class=\"tablelistbullet\">z/OS</li><li class=\"tablelistbullet\">BIM</li><li class=\"tablelistbullet\">Applications (SAP, Oracle E-Business Suite, AFT, Databases, Web Services, Java and Messaging, PeopleSoft)</li></ul></td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Sub Application</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the Sub Application that the job is associated with at the third level in the node hierarchy in the Control-M environment.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Application</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the application that the job is associated with at the second level in the node hierarchy in the Control-M environment.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Parent Folder</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows the folder container that the job is associated with at the fourth level in the node hierarchy in the Control-M environment.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"186\"><p class=\"tablebodytext\">Cyclic</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"366\"><p class=\"tablebodytext\">Shows whether the job runs at defined cyclic intervals.</p>\
</td>\
</tr>\
\
</table>\
<p class=\"bodytext\"></p>\
<table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"545.htm\" target=\"_self\">Job details</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"47329\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Job General tab\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 4/25/2016 4:57:25 PM\" />\
</body>\
</html>\
'
});