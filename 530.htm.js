JSONP.response({
  responseText: '﻿<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\
<html>\
<head>\
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\
<title> Ordering a service </title>\
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
<body  onload=\"if (isTOCLoaded()) {expand(\'525\');highlight(\'72455\')}\">\
<h2 id=\"t72455\" class=\"heading2\">Ordering a service</h2>\
<p class=\"bodytext\">This procedure describes how to order a service, which enables you to run all the jobs within the service.</p>\
<p class=\"procedureheading\">To order a service:</p>\
<ol class=\"listnumber\"><li class=\"listnumber\">Click <strong class=\"strong\">Order Service</strong>.<p class=\"listcontinue\">The <strong class=\"strong\">Service Ordering </strong>window appears.</p>\
</li><li class=\"listnumber\">Select the service in the left pane.<p class=\"listnotecontinue\"><strong class=\"notebold\">NOTE:</strong> You can search for a service by typing in its name in the search field below the list.</p>\
</li><li class=\"listnumber\">(Optional) Select the <strong class=\"strong\">Order as independent flow</strong> check box, which determines if a flow in a folder is ordered uniquely.<p class=\"listnote\"><strong class=\"strong\">NOTE:</strong> This check box is only enabled if you are ordering a single folder (a SMART folder service) created in version 8.0.00 and above. If the check box does not appear, you need to change the <strong class=\"strong\">DisplayOrderAsIndependentflow</strong> field in the Control-M Configuration Manager. For more information, see Defining Control-M Self Service parameters.</p>\
</li><li class=\"listnumber\">For each parameter, type in or select a value.</li><li class=\"listnumber\">Do one of the following:<ul class=\"listbullet2\"><li class=\"listbullet2\">Click <strong class=\"strong\">Order</strong></li><li class=\"listbullet2\">Click <strong class=\"strong\">Order and Keep Open</strong>, which enables you to order another service without reopening the <strong class=\"strong\">Service Ordering</strong> window.</li></ul><p class=\"listcontinue\">The new service appears regardless of search or filtering criteria, and will remain until replaced with the scheduled service.</p>\
</li></ol><table class=\"relatedtopics belowtopictext\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\
<tr valign=\"top\">\
<td>\
<h3 class=\"relatedheading\">Parent Topic</h3><p class=\"relateditem\"><a href=\"Service_View.htm\" target=\"_self\">Control-M Self Service service management</a></p></td>\
</tr>\
</table>\
\
\
<input id=\"topicId\" type=\"hidden\" value=\"72455\" />\
<input id=\"topicDescription\" type=\"hidden\" value=\"Ordering a service\" />\
<input id=\"footer-modified\" type=\"hidden\" value=\"Last modified: 7/20/2015 3:04:34 PM\" />\
</body>\
</html>\
'
});