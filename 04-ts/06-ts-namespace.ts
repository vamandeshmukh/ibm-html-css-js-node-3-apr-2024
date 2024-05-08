namespace Ibm {
    export const addNums = (a: number, b: number) => { console.log(a + b); };
    export const subNums = (a: number, b: number) => { console.log(a - b); };
}
// create three files as these 
// transpile with this command -  
// tsc --outFile 06-output.js 06-ts-namespace.ts   06-ts-namespace-2.ts   06-ts-namespace-3.ts
// run as 
// node 06-output.js 