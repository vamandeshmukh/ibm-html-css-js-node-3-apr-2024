import express from 'express';
import { authenticateJWT, generateToken } from './auth.js';
import { Employee } from './db-con.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(authenticateJWT);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get('/employees', (req, res) => {

    Employee.find()
        .then(employees => {
            res.json(employees);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
        });
    res.send('asdf');
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

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'sonu' && password === 'sonu') {
        const token = generateToken({ username });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

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

