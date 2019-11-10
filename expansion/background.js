let domain = '';
chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
  alert(request.domain);
  alert(sender.tab ? domain = "get domain" : "send domain");
  console.log(sender.tab ? domain = request.domain : sendResponse(domain));
});
