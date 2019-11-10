addEventListener("DOMContentLoaded", () => {
    const checkPageButton = document.getElementById('checkPage');
    const passField = document.getElementById('field');
    const passField2 = document.getElementById('input_login');
    const checkSaveButton = document.getElementById('DataSave');
    
    checkPageButton.addEventListener('click', () => {
        passField.style.visibility = '';
        passField2.style.visibility = '';
        let pass = '';
        let map = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~';
	    for (let i = 0 ; i < 12 ; i++) { 
	        let [b] = crypto.getRandomValues( new Uint8Array(1) ); 
	        pass += map[ b[0] % map.length ]; 
	    }
        passField.innerHTML = pass;
        let pass2 = '';
        pass2=document.getElementById('input_login').value;
        checkSaveButton.style.visibility = '';
    });
        
});