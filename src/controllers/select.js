import select from '../view/select.html';

export const home =  () => {
    const section = document.createElement('section');
    section.className = 'container';
    section.innerHTML = select;
    return section;
}