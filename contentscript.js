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
/*
//console.log(document.getElementById("system-debug"));
console.log(document.getElementById("jfox_general"));//console.dir
console.log(document.getElementById("jfox_system"));
console.log(document.getElementById("jfox_page"));
console.log(document.getElementById("jfox_queries"));
console.log(document.getElementById("jfox_request"));
console.log(document.getElementById("jfox_permissions"));
//console.log(document.getElementById("jfox_general"));
*/

/**
 * Alias for document.getElementById.
 * @param {string} id The id of the element.
 * @return {HTMLElement} The html element for the given element id.
 */
function $(id) {
  return document.getElementById(id);
};

