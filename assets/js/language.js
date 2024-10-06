document.addEventListener('DOMContentLoaded', function() {
    var defaultLanguage = 'en';
    var language = localStorage.getItem('language') || defaultLanguage;
    loadLanguage(language);

    document.getElementById('language-select').addEventListener('change', function() {
        var selectedLanguage = this.value;
        if (selectedLanguage === 'qc') {
            document.getElementById('binary-css').disabled = false;
            document.body.classList.add('binary-mode');
        } else {
            document.getElementById('binary-css').disabled = true;
            document.body.classList.remove('binary-mode');
            loadLanguage(selectedLanguage);
        }
        localStorage.setItem('language', selectedLanguage);
    });
});

function loadLanguage(lang) {
    fetch('assets/languages/' + lang + '.json')
        .then(response => response.json())
        .then(data => {
            document.title = data.title;
            document.querySelector('.welcome-message').innerText = data.welcome_message;
            document.querySelector('.contract-address .label').innerText = data.contract_address;
            document.querySelector('.contract-address .address').innerText = data.contract_value;
            document.querySelector('#about h2').innerText = data.what_is;
            document.querySelector('#about p').innerText = data.about_text;
            document.querySelector('#about blockquote').innerText = data.quote;
        })
        .catch(error => console.error('Error loading language file:', error));
}
