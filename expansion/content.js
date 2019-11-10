var x = (window.location.hostname.toString());
chrome.runtime.sendMessage({domain:x});
alert(x);