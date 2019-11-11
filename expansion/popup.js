addEventListener("DOMContentLoaded", () => {
    const checkPageButton = document.getElementById('checkPage');
    const passField = document.getElementById('input_password');
    const loginField = document.getElementById('input_login');
    const checkSaveButton = document.getElementById('DataSave');
    const checkSeeButton = document.getElementById('Find');
    const HIDE = document.getElementById('contain');

    checkPageButton.addEventListener('click', () => {
        passField.style.visibility = '';
        loginField.style.visibility = '';
        let pass = '';
        let map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%()*+,-./:;<>?@[]^_{|}~'; 
	    for (let i = 0 ; i < 12 ; i++) { 
	        let b = crypto.getRandomValues( new Uint8Array(1) );
	        pass += map[ b[0] % map.length ]; 
	    }
        passField.value = pass;
        checkSaveButton.style.visibility = '';
        passBuffer = pass;
    });

    checkSaveButton.addEventListener('click', () => {
        const login = document.getElementById('input_login').value;
        const pass = document.getElementById('input_password').value;
        checkSaveButton.innerHTML ="Saved";
        //void chrome.runtime.lastError;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {login: login, password: pass}, response => {
                void chrome.runtime.lastError;
            });
        });
    });

    checkSeeButton.addEventListener('click', () => { HIDE.style.visibility = "hidden"; });
});