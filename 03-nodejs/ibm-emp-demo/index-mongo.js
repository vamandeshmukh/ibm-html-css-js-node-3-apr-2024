import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const connectionString = 'mongodb://localhost:27017';
const databaseName = 'ibm';

mongoose.connect(`${connectionString}/${databaseName}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

app.use(express.json());

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
