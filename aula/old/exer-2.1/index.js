var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderArray() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var item = document.createElement('li');

        var link = document.createElement('a');
        link.href = '#';
        link.setAttribute('onclick', 'deleteTodo(' + todos.indexOf(todo) + ')');
        link.appendChild(document.createTextNode('Excluir'));

        item.appendChild(document.createTextNode(todo));
        item.appendChild(link);

        listElement.appendChild(item);
    }
}

renderArray();

buttonElement.onclick = function() {
    if (inputElement.value !== '') {
        todos.push(inputElement.value);
        inputElement.value = '';
        renderArray();
        save();
    } else {
        alert('Inválido');
    }
};

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderArray();
    save();
}

function save() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}