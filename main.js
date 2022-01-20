// Dependencies
import { fileTypeFromFile } from 'file-type';

// My local includes
import * as global from "./global.js"


// View the file type using "file-type"
//console.log(await fileTypeFromFile('imperial_march_noisy.wav'));


// This is how you call global varaibles
//console.log(global.my_name);




// js pointer example
const obj1 =
{
    city: 'Boston',
    state: 'Massachusetts'
};

const obj2 = obj1;
obj2.city = 'Springfield';

console.log(obj1); // {city: 'Springfield', state: 'Massachusetts'};










