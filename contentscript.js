var now = new Date();
var hour        = now.getHours();
var minute      = now.getMinutes();
var second      = now.getSeconds();


if($("jchrome")){
    console.groupCollapsed('JChrome [' + hour + ':' + minute + ':' + second + ']: ' + window.location);
    //console.log($("jchrome").innerHTML);//console.dir
    if($("jchrome-page")){
        console.info("Page",JSON.parse($("jchrome-page").innerHTML) );//console.dir
    }
    if($("jchrome-performance")){
        console.info("performance",JSON.parse($("jchrome-performance").innerHTML) );//console.dir
    }
    if($("jchrome-system")){
        console.info("System",JSON.parse($("jchrome-system").innerHTML) );//console.dir
    }
    if($("jchrome-security")){
        console.info("Security",JSON.parse($("jchrome-security").innerHTML) );//console.dir
    }
    console.groupEnd('jchrome');
} else {
    console.log("JChrome is not installed or enabled for this page");//console.dir
}











//alert('content script');

/*
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.greeting == "hello")
   sendResponse({farewell: "goodbye"});
 else
   sendResponse({}); // snub them.
});
*/

chrome.extension.sendRequest({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

//chrome.extension.sendRequest({greeting: "hello"}, function(response) {
//  console.log(response.farewell);
//});

//console.log(document.getElementById("system-debug"));



//console.log(document.getElementById("jchrome_general"));//console.dir
//console.log(document.getElementById("jchrome_system"));
//console.log(document.getElementById("jchrome_page"));
//console.log(document.getElementById("jchrome_queries"));
//console.log(document.getElementById("jchrome_request"));
//console.log(document.getElementById("jchrome_permissions"));
//console.log(document.getElementById("jfox_general"));


/**
 * Alias for document.getElementById.
 * @param {string} id The id of the element.
 * @return {HTMLElement} The html element for the given element id.
 */
function $(id) {
  return document.getElementById(id);
};

