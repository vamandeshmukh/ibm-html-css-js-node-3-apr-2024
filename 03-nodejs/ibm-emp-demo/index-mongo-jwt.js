import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const app = express();
const port = process.env.PORT || 3000;
const secretKey = 'vaman-secret';

mongoose.connect('mongodb://localhost/employee_management')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Employee = mongoose.model('Employee', employeeSchema);

app.use(express.json());

const authenticateJWT = (req, res, next) => {
    let token = '';
    console.log('Authorization header:', req.headers.authorization);
    if (req.path === '/login') {
        return next();
    }
    if (req.headers.authorization)
        token = req.headers.authorization.split(" ")[1];
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT verification error:', err);
                return res.status(403).json({ message: 'Failed to authenticate token' });
            } else {
                console.log('Decoded token:', decoded);
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};


const generateToken = (user) => {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'sonu' && password === 'sonu') {
        const token = generateToken({ username });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.use(authenticateJWT);

app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    Employee.create(newEmployee)
        .then(employee => {
            res.status(201).json({ message: 'Employee created successfully', employee });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create employee', error: err.message });
        });
});

app.get('/employees', (req, res) => {
    Employee.find()
        .then(employees => {
            res.json(employees);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
        });
});

app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    Employee.findById(employeeId)
        .then(employee => {
            if (employee) {
                res.json(employee);
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch employee', error: err.message });
        });
});

app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const updatedEmployee = req.body;
    Employee.findByIdAndUpdate(employeeId, updatedEmployee, { new: true })
        .then(employee => {
            if (employee) {
                res.json({ message: 'Employee updated successfully', employee });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update employee', error: err.message });
        });
});

app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    Employee.findByIdAndDelete(employeeId)
        .then(employee => {
            if (employee) {
                res.json({ message: 'Employee deleted successfully' });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete employee', error: err.message });
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
