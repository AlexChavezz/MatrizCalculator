export const getValues = (section) => {
    const values = section.querySelectorAll('.value');
    const array = [];
    values.forEach(value => array.push(value.value));
    return array;
}