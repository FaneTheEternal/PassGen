addEventListener("DOMContentLoaded", () => {
    const checkPageButton = document.getElementById('checkPage');
    const passField = document.getElementById('field');
    const passField2 = document.getElementById('input_login');
    const checkSaveButton = document.getElementById('DataSave');
    
    checkPageButton.addEventListener('click', () => {
        passField.style.visibility = '';
        passField2.style.visibility = '';
        let pass = '';
        let map = '1234567890-=~!@#$%^&*()_+qwertyuiop[]asdfghjklzxcvbnmQWERTYUIOP{}ASDFGHJKLZXCVBNM<>?';
        for (let i = 0 ; i < 12 ; i++) {
            pass += map[Math.floor((Math.random() * 100) % map.length)];
        }
        passField.innerHTML = pass;
        let pass2 = '';
        pass2=document.getElementById('input_login').value;
        checkSaveButton.style.visibility = '';
    });
        
});