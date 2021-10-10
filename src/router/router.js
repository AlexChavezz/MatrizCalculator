import select from '../view/select.html';
import { home } from '../controllers/select';
import { determinante } from '../controllers/determinante';
import { traspuesta } from '../controllers/traspuesta';

const root = document.querySelector('#root');

export const router = ( route ) => {
    root.innerHTML = '';

    switch (route) {
        case '#/': {
            return root.appendChild(home());
        }
        case "#/determinante":{
            return root.appendChild(determinante());
        }
        case '#/traspuesta':{
            return root.appendChild(traspuesta());
        }

        default:
            return root.innerHTML = '<h1> Route no found </h1>'
    }
}
