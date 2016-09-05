JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Service General tab </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'531\');expand(\'525\');highlight(\'532\')}\">\
<h3 id=\"t532\" class=\"heading3\">Service General tab</h3>\
<p class=\"bodytext\">The following table describes the basic parameters for the selected service.</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"184\"><p class=\"tableheading\">Parameter</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"368\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Status</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows one of the following possible statuses:</p>\
<ul class=\"tablelistbullet\"><li class=\"tablelistbullet\">OK</li><li class=\"tablelistbullet\">Not OK</li><li class=\"tablelistbullet\">Warning</li><li class=\"tablelistbullet\">Completed</li><li class=\"tablelistbullet\">Completed Late</li><li class=\"tablelistbullet\">OK and Completed OK</li><li class=\"tablelistbullet\">Not OK and Completed Late</li></ul></td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Start Time</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the timestamp when the service started to run.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">End Time</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the timestamp when the service stopped running.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Ordered By</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the name of the person who ordered the service.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Deadline</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the time when a Batch Impact Manager service must complete to not be considered late (<em class=\"emphasis\">Batch Impact Manager services only</em>).</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Order ID</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the Order ID number.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Total Jobs</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows how many jobs are in the service.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Jobs Completed</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows how many jobs within the service completed.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Priority</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the priority level of the service (<em class=\"emphasis\">Batch Impact Manager services only</em>).</p>\
</td>\
</tr>\
\
</table>\
<p class=\"bodytext\"></p>\
<table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"531.htm\" target=\"_self\">Service details</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"532\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Service General tab\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:49 PM\" />\
</body>\
</html>\
'
});