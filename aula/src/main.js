import api from './api';

class App {
    constructor() {
        this.repos = [];
        this.formEl = document.querySelector('#app');
        this.registerHandlers();
        this.repoList = document.querySelector('#app-list');
        this.inputEl = document.querySelector('.input1');
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepo(event);
    }

    async addRepo(event) {
        event.preventDefault();

        let inputArray = String(this.inputEl.value).split(',');

        if (inputArray.length < 2 && inputArray[0] === '') {
            alert('User field is null');
            return;
        }

        let response = [];
        for (let item of inputArray) {
            try {
                response.push(await api.get(`/users/${item}`));
            } catch (err) {
                alert(`${item}: [${err}]`);
                this.inputEl.value = '';
                return;
            }
        }

        for (let item of response) {
            this.repos.push(item.data);
        }

        this.render();
        this.inputEl.value = '';

    }

    render() {
        this.repoList.innerHTML = '';

        for (let item of this.repos) {
            let newLi = document.createElement('li');

            let newItem;
            if (this.repos.indexOf(item) !== 0) {
                newItem = document.createElement('li');
                newItem.setAttribute('class', 'separator');
                newLi.appendChild(newItem);
            }

            newItem = document.createElement('img');
            newItem.src = item.avatar_url;
            newLi.appendChild(newItem);

            newItem = document.createElement('strong');
            newItem.appendChild(document.createTextNode((item.name !== null) ? item.name : '*This user doesn´t have name*'));
            newLi.appendChild(newItem);

            newItem = (this.verificarLength(item.bio) >= 45) ? document.createElement('textarea') : document.createElement('p');
            newItem.appendChild(document.createTextNode((item.bio !== null) ? item.bio : '*This user doesn´t have bio*'));
            newLi.appendChild(newItem);

            newItem = document.createElement('a');
            newItem.href = item.html_url;
            newItem.setAttribute('target', '_blank');
            newItem.appendChild(document.createTextNode('Acessar'));
            newLi.appendChild(newItem);

            this.repoList.appendChild(newLi);
        }
    }

    verificarLength(obj) {
        try {
            return obj.length;
        } catch (err) {
            return 0;
        }
    }
}

new App();

/*
import soma, { retornaOi as oi } from './fun';
import * as functions from './fun2';

import axios from 'axios';

import ClasseUsuario, { x as numeroQualquer } from './fun';

const vsf = async() => console.log(await ClasseUsuario.myPromise());

const div = document.querySelector('#app');

const getUserInfo = async(username = '') => {
    let res;
    try {
        res = await axios.get(`https://api.github.com/users/${username}`);
    } catch (err) {
        res = err;
    }
    let text = document.createElement('textarea');
    text.cols = 100;
    text.rows = 200;
    text.appendChild(document.createTextNode((res.status !== undefined) ? res.status : res));
    if (res.data !== undefined) {
        text.appendChild(document.createTextNode(JSON.stringify(res.data)));
    }
    div.appendChild(text);
};

getUserInfo('waltvy-br');
*/