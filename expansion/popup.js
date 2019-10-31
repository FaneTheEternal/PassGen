addEventListener("DOMContentLoaded", () => {
    const checkPageButton = document.getElementById('checkPage');
    const passField = document.getElementById('field');
    checkPageButton.addEventListener('click', () => {
        passField.style.visibility = '';
        let pass = '';
        let map = '`1234567890-=~!@#$%^&*()_+|qwertyuiop[]asdfghjkl;zxcvbnm,.QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?';
        for (let i = 0 ; i < 12 ; i++) {
            pass += map[Math.floor((Math.random() * 100) % map.length)];
            console.log(Math.floor((Math.random() * 100) % map.length));
        }
        console.log(pass);
        passField.innerHTML = pass;
    });
        
});