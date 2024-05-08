// user.controller.js 
import { generateToken } from '../services/auth.service.js';
import userService from '../services/user.service.js';

const registerUser = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUser = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    try {
        const user = await userService.loginUser(req.body);
        const token = generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};


// app.post('/login', (req, res) => {
//     console.log(req.body);
//     const { username, password } = req.body;
//     if (username === 'sonu' && password === 'sonu') {
//         const token = generateToken({ username });
//         res.status(200).json({ message: 'Login successful', token });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });

const updateUserProfile = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    console.log(req.params.id);
    const userId = req.params.id;
    const updatedData = req.body;
    try {
        const updatedUser = await userService.updateUserProfile(userId, updatedData);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { registerUser, loginUser, updateUserProfile };