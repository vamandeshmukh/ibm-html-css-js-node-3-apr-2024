// node 06-js-async.js

// // problems of asynchronous JavaScipt  
// -------------------------------------

// const getMessage = () => {
//     console.log('getMessage function called.');
//     setTimeout(() => {
//         return { message: 'Have fun!' };
//     }, 2000);
// };

// const output = getMessage();
// console.log(output.message);

// solution 1 - callback 
// ---------------------

// const getMessage = (arg) => {
//     console.log('getMessage function called.');
//     setTimeout(() => {
//         arg({ message: 'Have fun!' })
//     }, 2000);
// };

// getMessage((abc) => {
//         console.log(abc.message);
//     });

// solution 2 - Promise 
// ---------------------

// const getMessage = () => {
//     return new Promise();
// };

// const getMessage = () => {
//     return new Promise(() => { });
// };

// const getMessage = () => {
//     return new Promise((resolve, reject) => { });
// };

// const getMessage = () => {
//     return new Promise((resolve, reject) => {
//         const isDataAvailable = false; // true, false 
//         setTimeout(() => {
//             if (isDataAvailable)
//                 resolve({ message: 'Have fun!' });
//             else
//                 reject({ message: 'Data not available!' })
//         }, 2000);
//     });
// };

// getMessage()
//     .then(() => {}) // success 
//     .catch(() => {}); // error 

// getMessage()
//     .then(() => {}) // success 
//     .then(() => {}) // success 
//     .catch(() => {}); // error 

// getMessage()
//     .then((response) => { console.log(response.message); })
//     .catch((error) => { console.log(error.message); });


// solution 3 - async await 
// ------------------------

const getMessage = () => {
    return new Promise((resolve, reject) => {
        const isDataAvailable = true; // true, false 
        setTimeout(() => {
            if (isDataAvailable)
                resolve({ message: 'Have fun!' });
            else
                reject({ message: 'Data not available!' });
        }, 2000);
    });
};

const printData = async () => {
    try {
        const output = await getMessage();
        console.log(output.message);
    } catch (error) {
        console.log(error.message);
    }
};

printData();













