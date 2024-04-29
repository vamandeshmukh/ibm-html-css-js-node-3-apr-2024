import express from 'express';
import fs from 'fs';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const filePath = './emp-data.json';

let employees = [];

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log('file error!');
    }
    else {
        try {
            employees = JSON.parse(data);
        } catch (error) {
            console.error('Error parsing employee data:', error);
        }
    }
});

const saveEmployees = () => {
    fs.writeFile(filePath, JSON.stringify(employees), (err) => {
        if (err) {
            console.error('Error saving employee data:', err);
        }
    });
};

app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    saveEmployees();
    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
});

app.get('/', (req, res) => {
    console.log('Welcome');
    res.send('Welcome to IBM Employee Management System');
});
app.get('/employees', (req, res) => {
    res.json(employees);
});

app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const employee = employees.find(emp => parseInt(emp.id) === parseInt(employeeId));
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const updatedEmployee = req.body;
    const index = employees.findIndex(emp => parseInt(emp.id) === parseInt(employeeId));
    if (index !== -1) {
        employees[index] = updatedEmployee;
        saveEmployees();
        res.json({ message: 'Employee updated successfully', employee: updatedEmployee });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const index = employees.findIndex(emp => parseInt(emp.id) === parseInt(employeeId));
    if (index !== -1) {
        employees.splice(index, 1);
        saveEmployees();
        res.json({ message: 'Employee deleted successfully' });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
