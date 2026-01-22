//employeen constructor function
function Employee(id,name,department,salary){
    this.id=id;
    this.name=name;
    this.department=department;
    this.salary=salary;
}

//create a simple emloyee database (object)
const employeeDb={};
//function to add employee to the database

function addemployee(id, name, department,salary)
{
    const employee = new Employee(id,name,department,salary); 
    employeeDb[id]=employee;
    console.log("employeee with Id"+id+" added")
}

// function to get all employee (object.values)

function getallemployees(){
    const employees=Object.values(employeeDb);
    console.log("list of employees");
    employees.forEach((employee)=>{
        console.log(`Name:${employee.name},Department:${employee.department},salary:${employee.salary}`)

    })
}

// function to get employee details by Id(object.enteries)

function getemployeeDetails(id){
    if(employeeDb){
        return Object.entries(employeeDb[id])
    }
    return `employee with Id ${id}id not found`;

}

// fuinction to updae employee deatails

function updateEmployee(id,updateDetails){
    if(employeeDb){
        Object.assign(employeeDb[id],updateDetails)
    }
    else{
        console.log(`employee with id${id} is not found`)
    }
}

//function to freezee employee data

function Freeze(id)
{
    if(employeeDb){
        Object.freeze(employeeDb[id])
        console.log(" employee data freeze")
    }
    else{
        console.log(`employee with id${id} is not found`)
    }
}

// function to seal employee data
function seal(id)
{
    if(employeeDb){
        Object.seal(employeeDb[id])
        console.log("employee data sealed")
    }
    else{
        console.log(`employee with id${id} is not found`)
    }
}

// usage

addemployee(1,"udhay","it",70000)
addemployee(2,"venky","it",75000)
addemployee(3,"tharun","HR",70000)
//view employee
getallemployees();
console.log('\n');
getallemployees();
console.log('\n');
console.log(getemployeeDetails(2))
console.log('\n');
console.log("update employee detailes:")
updateEmployee(1,{salary:76000})
console.log("after update")
getallemployees();

console.log("\n")
console.log("freezing employee data")
Freeze(2)
// attempt to modify frozen data
employeeDb[2].salary=70000//this won't work
console.log("after freeze");
getallemployees();
// seal employee data

console.log('\n');
console.log("sealing employee data")
seal(1);
employeeDb[1].salary=80000
console.log(getemployeeDetails(1));