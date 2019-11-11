

addEventListener("DOMContentLoaded", () => {
   const checkPageButton = document.getElementById('checkPage');//кнопка генерации
    const passField = document.getElementById('input_password');//окно с паролем
    const loginField = document.getElementById('input_login');//окно логина
    const checkSaveButton = document.getElementById('DataSave');//кнопка сохранения
    const checkSeeButton = document.getElementById('Find');//кнопка запроса вывода паролей текущего сайта
    const HIDE = document.getElementById('contain');//блок состояния №1 (окна+кнопки)
    const view = document.getElementById('checklist');//блок состояния №2 (под вывод)
    const currs = document.getElementById('currentfield');//блок отображения учёток текущего сайта
    const allButton = document.getElementById('seeALL');//кнопка вывода всех учёток
    const allView = document.getElementById('allfields');//блок отображения всех учёток
    

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
        checkSaveButton.innerHTML ="Login details saved";
        //void chrome.runtime.lastError;
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {login: login, password: pass, req: 'send'}, response => {
                void chrome.runtime.lastError;
            });
        });
    check.allButton.addEventListener('click', () => {
	currs.style.display = "none";
	allView.style.display = "block";
         });
    });

    checkSeeButton.addEventListener('click', () => { 
        HIDE.style.display = "none"; 
        view.style.display = "block"; 
        const field = document.getElementById('currentfield');
        fetch(`http://localhost:8080/`)
            .then(r => r.text())
            .then(result => {
                const data = JSON.parse(result);
                
                for (let domain in data) {
                    for (let login in data[domain]) {
                        field.innerHTML += `<div id="dataStr">${domain}: ${login} : ${data[domain][login]}</div>`;
                    }
                }
            });
    });
});