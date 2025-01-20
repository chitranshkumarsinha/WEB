//MODULE IMPORT FILE

//default import
import multiply from "./mathOperatonsM.js";
console.log(multiply(23,3));


//named import
import {add,subtract} from  "./mathOperatonsM.js"
console.log(add(23,3)); 
console.log(subtract(23,3)); 

