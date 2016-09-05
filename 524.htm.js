JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Jobs view </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39157\');highlight(\'73286\')}\">\
<h2 id=\"t73286\" class=\"heading2\">Jobs view</h2>\
<p class=\"bodytext\">The following figure shows jobs that belong to a specific service in the left pane and the related details of the selected job in the right pane:</p>\
<p class=\"bodytext\">For a detailed description of the analysis panel in the right pane, see <a id=\"h1172\" class=\"jumptemplate\" title=\"Job details\" href=\"545.htm\" target=\"_self\">Job details</a>.</p>\
<p class=\"bodytext\"><img id=\"f556\" src=\"jobs_view.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"622\" width=\"958\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
<p class=\"bodytext\">The following table describes the various actions you can perform in the Jobs view:</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"184\"><p class=\"tableheading\">Option</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"368\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f557\" src=\"back.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"25\" width=\"27\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to navigate to the previous job in your job selection.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f558\" src=\"forward.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"23\" width=\"28\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to navigate to the next job in your job selection.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f550\" src=\"refresh.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"24\" width=\"28\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to refresh the Jobs View manually.</p>\
<p class=\"tablenote\">The jobs are automatically refreshed at defined intervals.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f39804\" src=\"i_sls_neighborhood.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"22\" width=\"110\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Opens the neighboring jobs in a new tab. The neighboring jobs include related prerequisite jobs of the selected job, and jobs that are dependent on the selected job. </p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f559\" src=\"navigate_to.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"25\" width=\"88\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to navigate to the predecessor or successor of a selected job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f552\" src=\"actions.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"23\" width=\"66\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to hold, release, re-run, confirm, restart, set to OK, kill, order or update the selected job, as described in <a id=\"h1164\" class=\"jumptemplate\" title=\"Control-M Self Service service management\" href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f554\" src=\"tile_view.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"22\" width=\"30\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to view the jobs in Tile view that shows limited details of the selected job.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f555\" src=\"list_view.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"24\" width=\"28\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to view the jobs in List view that shows descriptive details of the selected job, as described in <a id=\"h1172_2\" class=\"jumptemplate\" title=\"Job details\" href=\"545.htm\" target=\"_self\">Job details</a>. You can do the following:</p>\
<ul class=\"tablelistbullet\"><li class=\"tablelistbullet\">Filter the job by typing a value in the relevant column or selecting a value from the drop-down list</li><li class=\"tablelistbullet\">Select which fields you want to appear in the List view</li><li class=\"tablelistbullet\">Group fields together</li></ul></td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">Zoom</p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to zoom in and out on jobs in Tile view.</p>\
</td>\
</tr>\
\
</table>\
<p class=\"bodytext\"></p>\
<table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"521.htm\" target=\"_self\">Introduction to Control-M Self Service</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"73286\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Jobs view\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 7/21/2015 4:33:20 PM\" />\
</body>\
</html>\
'
});