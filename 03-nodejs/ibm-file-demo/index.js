import fs from 'fs';

const dataFile2 = 'emp2.json';

const contentToWrite = {
    "eid": 102,
    "firstName": "Monu",
    "salary": 20.25
}

fs.writeFile(dataFile2, JSON.stringify(contentToWrite), 'utf8', (err) => {
    if (err)
        console.log(err);
    else
        console.log(`File written successfully!`);

});


