var Ibm;
(function (Ibm) {
    Ibm.addNums = function (a, b) { console.log(a + b); };
    Ibm.subNums = function (a, b) { console.log(a - b); };
    Ibm.addNums(10, 20);
    Ibm.subNums(20, 10);
})(Ibm || (Ibm = {}));
Ibm.addNums(5, 2);
Ibm.subNums(2, 5);
