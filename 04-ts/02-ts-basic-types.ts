// tsc 02-ts-basic-types.ts
// node 02-ts-basic-types.js

// Example #3: Type annotation with object properties

var employee: { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
};

console.log(employee);