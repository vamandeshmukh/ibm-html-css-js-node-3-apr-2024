// 04-js-callbacks.js

// const getMessage = (arg) => {
//     console.log('getMessage function called.');
//     arg({ message: 'Have fun!' })
// };

const getMessage = (arg) => {
    console.log('getMessage function called.');
    setTimeout(() => {
        arg({ message: 'Have fun!' })
    }, 2000);
};

// call the above function 
// getMessage();
// getMessage(() => {});
// getMessage((abc) => {});
getMessage((abc) => {
    console.log('callback function called');
    console.log(abc.message);
});
