function getUsers(method, path, body) {
    return new Promise(function(resolve, throwError) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, 'http://192.168.0.15:8080/' + path);
        if (method !== 'GET') {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.send(body);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                resolve(xhr.response);
            }
        };
    });
}

var lista = document.querySelector('.lista');
var entrada = document.querySelector('.in');
var entradamethod = document.querySelector('.in2');
var body = document.querySelector('.body');
var botao = document.querySelector('.bt');

botao.onclick = function() {
    getUsers(entradamethod.value, entrada.value, body.value)
        .then(function(response) {
            lista.innerHTML = '';
            var res = document.createElement('ul');
            res.appendChild(document.createTextNode(response));
            lista.appendChild(res);
        });
};