//const xyz = require('./people');

//console.log(xyz);

//console.log(xyz.people, xyz.ages); // outputs separatly the objects

//BETTER WAY TO OUTPUT NEEDED OBJECTS from different file
const {people, ages} = require('./people');

console.log(people, ages)

const os = require('os');

console.log(os.platform(), os.homedir());
