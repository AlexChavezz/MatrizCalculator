import determinantePage from '../view/determinantePage.html';

export const determinante = () => {
    const section = document.createElement('section');
    section.innerHTML = determinantePage;
    return section;
}