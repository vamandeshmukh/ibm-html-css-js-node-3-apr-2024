// node 05-js-data-manipulation.js

// array functions 
// object functions 

// const myFriends = ['Sonuuuu', 'Monu', 'Tonuuuu', 'Ponu'];

// loops in JS 

// for (let i = 0; i < myFriends.length ; i++) {
//     console.log(myFriends[i]);
// }

// for (let friend of myFriends) {
//     console.log(friend);
// }

// for (let friend in myFriends) {
//     console.log(friend);
// }

// forEach(() => {});

// myFriends.forEach((friend) => { console.log(friend); });
// myFriends.forEach(friend => { console.log(friend); });
// myFriends.forEach(friend => console.log(friend));

// myFriends.forEach(arg => { return arg + 2; });
// myFriends.forEach(arg => arg + 2);

// console.log(myFriends.includes('Sonu'));
// console.log(myFriends.includes('Ronu'));

// const frnds = myFriends.map(friend => friend.toUpperCase());
// frnds.forEach(f => console.log(f));

// myFriends.map(friend => friend.toUpperCase()).filter(frnd => frnd.length > 4)
//     .forEach(f => console.log(f));


// object functions 


const empData = {
    eid: 101,
    firstName: 'Sonu',
    salary: 10.25,
    phones: [1111, 2222],
    isIndian: true,
    address: { city: 'Pune', pin: 222222 },
};

// Object.keys(empData).forEach(k => console.log(k));
// Object.values(empData).forEach(v => console.log(v));

Object.entries(empData).forEach(e => console.log(e));

const myFriends = ['Sonuuuu', 'Monu', 'Tonuuuu', 'Ponu'];

Object.entries(myFriends);