import { router } from './router/router';
import './styles/main.scss';

// const getFormItems = () => {
//     const root = document.querySelector('#root');
//     const h1 = root.querySelector('h1');
//     const select = root.querySelector('select');
//     return [ root, h1 , select];
// }

// const addForm = () => {
//     const [ root, h1, select ] = getFormItems();
//     root.innerHTML = form;
//     h1.innerHTML = `La matriz seleccionada es ${select.value}`;
// }


// document.querySelector('.determinante').addEventListener('click', () => {
//     addForm();
// });

router(window.location.hash);
window.addEventListener('hashchange', () => {
    router(window.location.hash);
});