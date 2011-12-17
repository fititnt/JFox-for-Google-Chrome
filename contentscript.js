var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();


if($("jfox")){
    console.groupCollapsed('JFox [' + hour + ':' + minute + ':' + second + ']: ' + window.location);
    if($("jfox-page")){
        console.info("Page",JSON.parse($("jfox-page").innerHTML) );
    }
    if($("jfox-performance")){
        console.info("performance",JSON.parse($("jfox-performance").innerHTML) );
    }
    if($("jfox-system")){
        console.info("System",JSON.parse($("jfox-system").innerHTML) );
    }
    if($("jfox-security")){
        console.info("Security",JSON.parse($("jfox-security").innerHTML) );
    }
    console.groupEnd('jfox');
} else {
    console.log("JFox is not installed or enabled for this page");
}

chrome.extension.sendRequest({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

/**
 * Alias for document.getElementById.
 * @param {string} id The id of the element.
 * @return {HTMLElement} The html element for the given element id.
 */
function $(id) {
  return document.getElementById(id);
};

