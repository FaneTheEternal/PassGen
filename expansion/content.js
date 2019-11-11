const x = (window.location.hostname.toString());

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
    chrome.runtime.sendMessage({login: request.login, password: request.password, domain: x, req: 'send'});
  });