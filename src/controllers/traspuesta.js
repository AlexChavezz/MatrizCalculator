import view from '../view/traspuesta.html';
import matriz2x2 from '../view/2x2Matriz.html';
import matriz3x3 from '../view/3x3Matriz.html';
import { getValues } from '../helpers/getValues';

export const traspuesta = () => {
    const section = document.createElement('section');
    section.innerHTML = view;
    selectSize(section);
    return section;
}

const selectSize = (section) => {
    const size = section.querySelector('select');
    const divForm = section.querySelector('.form-group');
    const form = section.getElementsByClassName('form');

    size.addEventListener('change', () => {
        if( size.value === '2x2'){
            divForm.innerHTML = matriz2x2;
            form[0].addEventListener('submit', (e) => {
                e.preventDefault();
                const values = getValues(section);
                // const transpuestaRes = determinante2x2(values);
                // h1.innerHTML = `|A| = ${determinante}`;
                console.log(values)
            });
        }else if(size.value  === '3x3'){
            console.log('3x3')
        }
    });
}

const transpuesta = (values) => {
    let transpuesta = [];
}
