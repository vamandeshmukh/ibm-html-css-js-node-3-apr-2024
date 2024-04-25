import fs from 'fs';

const dataFile = 'emp.json';
const dataFile2 = 'emp2.json';

// fs.readFile(filepath, 'utf8', (err, data) => { })
// fs.writeFile(filepath, 'utf8', (err) => { })

fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(JSON.parse(data));
    }
});

const contentToWrite = {
    "eid": 102,
    "firstName": "Monu",
    "salary": 20.25
};

fs.writeFile(dataFile2, JSON.stringify(contentToWrite), 'utf8', (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(`${data} written successfully!`);

});


