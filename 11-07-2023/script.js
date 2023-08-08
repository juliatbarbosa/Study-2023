var API_URL = "https://api.github.com/users/";
var USERNAME = 'juliatbarbosa'

/* window.onload = function () {
    // ### xmlhttprequest ###
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var div = document.getElementById('conteudo')
            div.innerHTML = xhttp.responseText;
        }
    }

    xhttp.open('GET', API_URL + USERNAME, true);
    xhttp.send();

} */

window.onload = function() {
    // ### promise ###
    fetch(`${API_URL}${USERNAME}`)
    
}

function requisicaoXMLHTTPRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var div = document.getElementById('conteudo')
            div.innerHTML = xhttp.responseText;
        }
    }

    xhttp.open('GET', API_URL + USERNAME, true);
    xhttp.send();
}