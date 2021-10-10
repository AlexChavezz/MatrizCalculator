import determinantePage from '../view/determinantePage.html';
import matriz2x2 from '../view/2x2Matriz.html';
import matriz3x3 from '../view/3x3Matriz.html';
import { getValues } from '../helpers/getValues';

export const determinante = () => {
    const section = document.createElement('section');
    section.innerHTML = determinantePage;
    selectSize(section);
    return section;
}
const selectSize = (section) => {
    const h1 = section.querySelector('h1');
    const form = section.getElementsByClassName('form');
    const size = section.querySelector('select');
    const divForm = section.querySelector('.form-group');
    size.addEventListener('change', () => {

        if (size.value === "2x2") {
            divForm.innerHTML = matriz2x2;
            form[0].addEventListener('submit', (e) => {
                e.preventDefault();
                const values = getValues(section);
                const determinante = determinante2x2(values);
                h1.innerHTML = `|A| = ${determinante}`;
            });

        }else if(size.value === "3x3"){
            divForm.innerHTML = matriz3x3;
            form[0].addEventListener('submit', (e) => {
                e.preventDefault();
                const values = getValues(section);
                const determinante = determinante3x3(values);
                h1.innerHTML = `|A| = ${determinante}`;
            });
        }else{
            divForm.innerHTML = '';
        }
    });  
}
const determinante2x2 = (values = []) => {
    let res;
    const valueOne = parseInt(values[ 0 ]) * parseInt(values[ 3 ]);
    const valueTwo = parseInt(values[ 1 ]) * parseInt(values[ 2 ]);
    res = valueOne - valueTwo;
    return res;
}
const determinante3x3 = (values = []) => {
    let res;
    const initialValores = [ parseInt(values[0]), parseInt(values[1]), parseInt(values[2]) ];
    const matrizOne = [ parseInt(values[4]), parseInt(values[5]), parseInt(values[7]), parseInt(values[8]) ];
    const matrixTwo = [ parseInt(values[3]), parseInt(values[5]), parseInt(values[6]), parseInt(values[8]) ];
    const matrizTres = [ parseInt(values[3]), parseInt(values[4]), parseInt(values[6]), parseInt(values[7]) ];

    const detMatrizOne =  determinante2x2(matrizOne);
    const detMatrixTwo = determinante2x2(matrixTwo);
    const detMatrizTres = determinante2x2(matrizTres);
    res = (initialValores[0] * detMatrizOne) - (initialValores[1] * detMatrixTwo) + (initialValores[2] * detMatrizTres);
    return res;
}