JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Service view </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'39157\');highlight(\'39608\')}\">\
<h2 id=\"t39608\" class=\"heading2\">Service view</h2>\
<p class=\"bodytext\">The following figure shows the services in the left pane and the related details of the selected service in the right pane:</p>\
<p class=\"bodytext\"><img id=\"f549\" src=\"service_view.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"621\" width=\"954\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
<p class=\"bodytext\">The following table describes the various actions you can perform in the Service view:</p>\
<table class=\"tableintopic\" width=\"552\" cellpadding=\"2\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\
<tr align=\"left\" valign=\"top\">\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"184\"><p class=\"tableheading\">Option</p>\
</th>\
<th bgcolor=\"#DBE5F1\" valign=\"bottom\" style=\"border-right:1px solid #010101;border-top:1px solid #010101;border-bottom:3px solid #010101;\" width=\"368\"><p class=\"tableheading\">Description</p>\
</th>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f39609\" src=\"sls_favorites.png\" class=\"linkedjpegfiletemplate\" alt=\"SLS_Favorites.png\" height=\"22\" width=\"103\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to manage your favorite services based on naming filters.</p>\
<p class=\"tablebodytext\">Open the drop-down list to add a selected service to your list of favorites. Additional options let you remove and edit favorites.</p>\
<p class=\"tablebodytext\">Under <strong class=\"strong\">Edit Favorites</strong>,<strong class=\"strong\"> </strong>you can type in the names of services to display. You can also use wild cards for service names.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f550\" src=\"refresh.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"24\" width=\"28\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to refresh the Service View manually.</p>\
<p class=\"tablenote\">The services are automatically refreshed at defined intervals.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f551\" src=\"show_history.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"23\" width=\"104\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to view the details of a service from specific date, as described in <a id=\"h1167\" class=\"jumptemplate\" title=\"Viewing the history of services\" href=\"529.htm\" target=\"_self\">Viewing the history of services</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f552\" src=\"actions.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"23\" width=\"66\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to hold and release the selected service, as described in <a id=\"h1164\" class=\"jumptemplate\" title=\"Control-M Self Service service management\" href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f553\" src=\"order_service.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"25\" width=\"87\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to order a service, as described <a id=\"h1168\" class=\"jumptemplate\" title=\"Ordering a service\" href=\"530.htm\" target=\"_self\">Ordering a service</a>.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f554\" src=\"tile_view.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"22\" width=\"30\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to view the services in Tile view that shows limited details of the service.</p>\
</td>\
</tr>\
<tr align=\"left\" valign=\"top\">\
<td style=\"border-left:1px solid #010101;border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"184\"><p class=\"tablebodytext\">&nbsp;</p>\
<p class=\"tablebodytext\"><img id=\"f555\" src=\"list_view.png\" class=\"linkedjpegfiletemplate\" alt=\"\" height=\"24\" width=\"28\" vspace=\"0\" hspace=\"0\" align=\"bottom\" border=\"0\"></p>\
</td>\
<td style=\"border-right:1px solid #010101;border-bottom:1px solid #010101;\" width=\"368\"><p class=\"tablebodytext\">Enables you to view the services in List view that shows descriptive details of the service, as described in <a id=\"h1169\" class=\"jumptemplate\" title=\"Service details\" href=\"531.htm\" target=\"_self\">Service details</a>. You can also choose which fields you want to appear in List view, by right-clicking any column and selecting the items you want.</p>\
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
<input id=\"topicId\" type=\"hidden\" value=\"39608\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Service view\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 5/15/2014 12:07:14 PM\" />\
</body>\
</html>\
'
});