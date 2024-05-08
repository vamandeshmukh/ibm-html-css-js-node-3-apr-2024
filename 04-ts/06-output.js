var Ibm;
(function (Ibm) {
    Ibm.addNums = function (a, b) { console.log(a + b); };
    Ibm.subNums = function (a, b) { console.log(a - b); };
    Ibm.addNums(10, 20);
    Ibm.subNums(20, 10);
})(Ibm || (Ibm = {}));
Ibm.addNums(5, 2);
Ibm.subNums(2, 5);
/// <reference path="06-ts-namespace.ts" />
var Ibm;
(function (Ibm) {
    Ibm.divNums = function (a, b) { console.log(a / b); };
    Ibm.multiNums = function (a, b) { console.log(a * b); };
})(Ibm || (Ibm = {}));
/// <reference path="06-ts-namespace.ts" />
/// <reference path="06-ts-namespace-2.ts" />
Ibm.addNums(5, 2);
Ibm.subNums(2, 5);
Ibm.divNums(5, 2);
Ibm.multiNums(2, 5);
