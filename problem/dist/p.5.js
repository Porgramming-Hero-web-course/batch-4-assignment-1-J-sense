"use strict";
{
    function getProperty(obj, key) {
        return obj[key];
    }
    const person = {
        name: 'Alice',
        age: 30,
        profession: 'Engineer'
    };
    const personName = getProperty(person, 'name');
    console.log(personName);
}
