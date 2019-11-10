const serverUrl = "http://192.168.1.95:3000";
addEventListener("DOMContentLoaded", () => {
    const checkPageButton = document.getElementById('checkPage');
    const passField = document.getElementById('input_password');
    const loginField = document.getElementById('input_login');
    const checkSaveButton = document.getElementById('DataSave');
    const checkSeeButton = document.getElementById('Find');


    checkPageButton.addEventListener('click', () => {
        passField.style.visibility = '';
        loginField.style.visibility = '';
        let pass = '';
        let map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_{|}~'; 
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
        fetch(`http://192.168.1.95:3000/?login=${login}&password=${pass}`)
            .then(r => r.text())
            .then(result => console.log(result));
    });

    checkSeeButton.addEventListener('click', () => {  });
});