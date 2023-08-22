const people = ['yoshi', 'brad', 'mario', 'tedd'];
const ages = [20, 25, 30, 35];

console.log(people);

//module.exports = 'hello'; //will export word hello to modules
//module.exports = people; //will export one object

module.exports = {
    people, ages
};