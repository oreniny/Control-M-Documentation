JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Service Log tab </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'531\');expand(\'525\');highlight(\'533\')}\">\
<h3 id=\"t533\" class=\"heading3\">Service Log tab</h3>\
<p class=\"bodytext\">The following table describes the activity parameters of the service.</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"184\"><p class=\"tableheading\">Parameter</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"368\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Event Time</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the timestamp of the service activity.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">From Status</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the previous status of the service.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">To Status</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the current status of the service.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Message ID</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Shows the ID number of the event message.</p>\
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
<input id=\"topicId\" type=\"hidden\" value=\"533\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Service Log tab\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/18/2015 6:36:49 PM\" />\
</body>\
</html>\
'
});