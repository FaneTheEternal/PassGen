const ip = 'localhost:8080';
const url = `http://${ip}`;
chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
  alert(request.req);
  if (request.req == 'sendS') {
    fetch(`${url}/add?login=${request.login}&password=${request.password}&domain=${request.domain}`)
            .then(r => r.text())
            .then(result => console.log(result) );
  } else {
    fetch(`${url}/`)
      .then(r => r.text())
      .then(result => sendResponse(JSON.parse(result)[request.domain]) );
  }
});