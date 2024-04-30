import supertest from "supertest";
import { app } from './index.js';

const request = supertest(app);
let token = '';

// beforeAll(); // login here and save the token 

describe('test setup', () => {
    beforeAll(async () => {
        const res = await request
            .post('/login')
            .send({ username: 'sonu', password: 'sonu' });
        token = res.body.token;
    });
});


describe('it should pass tests - ', () => {

    it('should find the number of employees', async () => {
        const res = await request
            .get('/employees');
        console.log(res);
        expect(res.status).toBe(200);
        expect(res.body.size).toBe(45);
    });

});



// describe('it should pass tests - ', () => {

//     it('should succeed login', async () => {
//         const res = await request
//             .post('/login')
//             .send({ username: 'sonu', password: 'sonu' });
//         expect(res.status).toBe(200);
//         expect(res.body.message).toBe('Login successful');
//         expect(res.body.token).toBeTruthy();
//     });

//     it('should fail login', async () => {
//         const res = await request
//             .post('/login')
//             .send({ username: 'asdf', password: 'asdf' });
//         expect(res.status).not.toBe(200);
//         expect(res.body.message).toBe('Invalid credentials');

//     })

// });


// describe();
// it();


// describe(arg1, arg2);
// describe('it should pass', () => { });

// it(a1, a2);
// it('test should pass', () => { });

// describe('it should pass', () => {

//     it();
//     it();
//     it();

// });


// import supertest from "supertest";

// import { app } from './index.js';

// const request = supertest(app);

// // beforeAll(); // login here and save the token

// // beforeEach();
// // afterAll();
// // afterEach();

// describe('test setup', () => {
//     beforeAll();
// });

// describe('it should pass tests - ', () => {

//     it('should succeed login', async () => {
//         const res = await request
//             .post('/login')
//             .send({ username: 'sonu', password: 'sonu' });
//         expect(res.status).toBe(200);
//         expect(res.body.message).toBe('Login successful');
//         expect(res.body.token).toBeTruthy();
//     });

//     it('should fail login', async () => {
//         const res = await request
//             .post('/login')
//             .send({ username: 'asdf', password: 'asdf' });
//         expect(res.status).not.toBe(200);
//         expect(res.body.message).toBe('Invalid credentials');

//     })

// });


// // describe();
// // it();


// // describe(arg1, arg2);
// // describe('it should pass', () => { });

// // it(a1, a2);
// // it('test should pass', () => { });

// // describe('it should pass', () => {

// //     it();
// //     it();
// //     it();

// // });
