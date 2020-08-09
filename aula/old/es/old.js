//import { User, Admin } from "./fun";
//console.log(new User('', '').isAdmin(), new Admin('', '').isAdmin()); <,m
export class User {
    constructor(email = '', senha = '') {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin() {
        return this.admin;
    }
}

export class Admin extends User {
    constructor(email = '', senha = '') {
        super(email, senha);
        super.admin = true;
    }
}

const users = [{
        nome: 'A',
        idade: 23,
        co: 'BC'
    },
    {
        nome: 'B',
        idade: 35,
        co: 'AC'
    },
    {
        nome: 'C',
        idade: 17,
        co: 'AC'
    }

];

const idades = users.map(item => item.idade);

const trampoIgual = users.filter(item => item.co === 'AC');

const maior = users.filter(item => item.co === 'AC' && item.idade >= 18);

const trampaNoGoogle = users.find(item => item.co === 'Google');

const users2 = users.map(item => {
    let age = item.idade * 2;
    return {...item, idade: age };
});

const maximo50 = users2.filter(item => item.idade <= 50);

const mostraIdade = () => users[0].idade;

const retornSahPoha = (nome, idade, ...arg) => ({ nome, idade, ...arg });

const promessa = () => new Promise((resolve, reject) => resolve());

const { nome, idade, co } = users[0];

const mostraInfo = ({ nome = '', idade = 0 }) => `${nome} tem ${idade} ano(s)`;

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

const soma = (...arg) => arg.reduce((total, next) => total + next);

const newUsers = {...users[0], nome: 'Gabriel' };

const us = {
    n: 'Levi',
    i: 18,
    add: {
        city: 'Sao Paulo',
        state: 'SP',
        country: 'BR'
    }
};

const newUs = {...us, add: {...us.add, city: 'Santos' } };