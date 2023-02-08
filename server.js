'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
//bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//  console.log(hash);
//  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//    console.log(res);
//  });
//});
//END_ASYNC

//START_SYNC
//var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
//var result = bcrypt.compareSync(myPlaintextPassword, hash);
//console.log(result);
//END_SYNC

let str = '192.168.1.3';

let hash1 = bcrypt.hashSync(str, 12);
let hash2 = bcrypt.hashSync(str, 12);
let hash3 = bcrypt.hashSync(str, 12);

console.log(`hash1 : ${hash1}`);
console.log(`compare1 : ${bcrypt.compareSync(str, hash1)}`);
console.log(`hash2 : ${hash2}`);
console.log(`compare2 : ${bcrypt.compareSync(str, hash2)}`);
console.log(`hash3 : ${hash3}`);
console.log(`compare3 : ${bcrypt.compareSync(str, hash3)}`);

app.listen(process.env.PORT || 3000, () => {});
