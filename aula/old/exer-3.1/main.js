function checaRepo(user) {
    return new Promise(function(response, error) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status !== 404) {
                    var result = JSON.parse(xhr.responseText);
                    response(result);
                } else {
                    error(xhr.status);
                }
            }
        };
    });
}

var input = document.querySelector('.in');
var button = document.querySelector('.bt');
var lista = document.querySelector('.lista');

function renderLista(arg) {
    lista.innerHTML = '';
    for (ar of arg) {
        var novo = document.createElement('li');
        novo.appendChild((ar === 404) ? document.createTextNode(ar) : document.createTextNode('repo' + (arg.indexOf(ar) + 1)));
        lista.appendChild(novo);
    }
}

button.onclick = function() {
    lista.innerHTML = '';
    lista.appendChild(document.createTextNode('Carregando...'));
    checaRepo(input.value)
        .then(function(response) {
            renderLista(response);
        })
        .catch(function(error) {
            renderLista([error]);
        });
}