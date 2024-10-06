// assets/js/language.js

document.addEventListener('DOMContentLoaded', function() {
    var defaultLanguage = 'en';
    var language = localStorage.getItem('language') || defaultLanguage;
    loadLanguage(language);

    document.getElementById('language-select').addEventListener('change', function() {
        var selectedLanguage = this.value;
        if (selectedLanguage === 'qc') {
            // Quantum Computerモードを有効化
            document.getElementById('binary-css').disabled = false;
            initBinaryMode();
        } else {
            document.getElementById('binary-css').disabled = true;
            loadLanguage(selectedLanguage);
            localStorage.setItem('language', selectedLanguage);
        }
    });
});

function loadLanguage(lang) {
    fetch('assets/languages/' + lang + '.json')
        .then(response => response.json())
        .then(data => {
            // テキストを動的に置き換える
            document.title = data.title;
            document.querySelector('.welcome-message').innerText = data.welcome_message;
            document.querySelector('.contract-address .label').innerText = data.contract_address;
            document.querySelector('.contract-address .address').innerText = data.contract_value;
            document.querySelector('#about h2').innerText = data.what_is;
            document.querySelector('#about p').innerText = data.about_text;
            document.querySelector('#about blockquote').innerText = data.quote;
            // 他の要素も同様に
        })
        .catch(error => console.error('Error loading language file:', error));
}
