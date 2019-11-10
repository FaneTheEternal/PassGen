var x = (window.location.hostname.toString());
chrome.runtime.sendMessage({site:x});