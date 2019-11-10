addEventListener("DOMContentLoaded", () => {
    const checkPageButton = document.getElementById('checkPage');
    const passField = document.getElementById('field');
    const passField2 = document.getElementById('input_login');
    const checkSaveButton = document.getElementById('DataSave');
    const checkSeeButton = document.getElementById('Find');

	let login = '';	

    checkPageButton.addEventListener('click', () => {
        passField.style.visibility = '';
        passField2.style.visibility = '';
        let pass = '';
        let map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ! \" # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _\` { | } ~'; 
	for (let i = 0 ; i < 12 ; i++) { 
	let [b] = crypto.getRandomValues( new Uint8Array(1) ); 
	pass += map[ b[0] % map.length ]; 
	}
        passField.innerHTML = pass;
        login=document.getElementById('input_login').value;
        checkSaveButton.style.visibility = '';
    });
    checkSaveButton.addEventListener('click', () => {  });
    checkSeeButton.addEventListener('click', () => {  });
});