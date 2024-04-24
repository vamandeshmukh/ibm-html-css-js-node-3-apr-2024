// IBM FSD Demo App
console.log('IBM FSD Demo App');

const restUrl = 'http://localhost:8090';
let allEmpsData = document.getElementById('all-emps-data');
const empData = document.getElementById('emp-data');
const employeeId = document.getElementById("employee-id");
const empTable = document.getElementById('emp-table');

const findAllEmployees = () => {
    console.log('findAllEmployees');
    fetch(`${restUrl}/emp/get-all-emps`)
        .then(res => res.json())
        .then((resp) => {
            let temp = '';
            resp.forEach(elem => {
                temp += `<div> 
                <span>${elem.employeeId}</span> 
                <span>${elem.firstName}</span> 
                <span>${elem.email}</span>
                <span>${elem.aadhaar}</span>
                <span>${elem.salary}</span>
                </div>`;
                console.log(elem);
            });
            allEmpsData.innerHTML = temp;
        })
};

// findAllEmployees();

const findEmployeeById = () => {
    console.log('findEmployeeById');
    fetch(`${restUrl}/emp/get-emp-by-id/${employeeId.value}`)
        .then(res => res.json())
        .then((resp) => {
            console.log(resp);
            console.log(resp);
            empData.innerHTML = `<p>${resp.firstName} ${resp.email} ${resp.aadhaar} ${resp.salary}</p>`;
        })
};

const findEmployeeByName = () => { };

const addEmployee = () => {
    console.log('addEmployee');
    const formData = new FormData(document.getElementById('employee-form'));

    const employee = {
        firstName: formData.get('first-name'),
        email: formData.get('email'),
        aadhaar: formData.get('aadhaar'),
        salary: formData.get('salary')
    };

    fetch(`${restUrl}/emp/add-emp`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee)
    })
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            document.getElementById('emp-added').innerText = `Employee with eid ${resp.employeeId} added successfully!`;
            document.getElementById('employee-form').reset();
        })
        .catch(err => {
            console.log(err);
            document.getElementById('emp-added').innerText = `Employee could not be added; ${err}`;
            document.getElementById('employee-form').reset();
        })
        ;
}
const updateEmployee = (emploteeId, employee) => { };

const deleteEmployee = (employeeId) => { };
