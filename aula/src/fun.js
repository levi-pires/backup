export const soma = (...arg) => arg.reduce((total, next) => total + next);

export const retornaOi = () => 'Oi';

export const x = 1;

export default class Usuario {
    static myPromise() {
        return new Promise((resolve, reject) => setTimeout(() => { resolve('ok'); }, 5000));
    }
}