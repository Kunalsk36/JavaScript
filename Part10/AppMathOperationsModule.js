// default import
import multiply from "./mathOperationsModule.js";

// named imports 
import {add, subtract} from "./mathOperationsModule.js";

// Using the imported functions
console.log("Addition of 5 and 3:", add(5, 3)); // Output: 8 // used named import
console.log("Subtraction of 5 from 10:", subtract(10, 5)); // Output: 5 // used named import
console.log("Multiplication of 4 and 6:", multiply(4, 6)); // Output: 24 // used default import