// node 06-js-async.js

const getMessage0 = () => {
    console.log('getMessage function called.');
    setTimeout(() => {
        return { message: 'Have fun!' };
    }, 2000);
};

const getMessage = (arg) => {
    console.log('getMessage function called.');
    setTimeout(() => {
        arg({ message: 'Have fun!' })
    }, 2000);
};

getMessage((abc) => {
    console.log(abc.message);
});

// const output = getMessage();
// console.log(output.message);




