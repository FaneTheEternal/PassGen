let domain;
chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
  domain = request.site;
});
