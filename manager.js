const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super (name, salary, title, manager);
        this.employees = [];
        
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }

        
    _totalSubSalary(){
let sum = 0;
for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else if (employee instanceof Employee) {
                sum += employee.salary;
            }
        }
return sum;

    }

    calculateBonus(multiplier){
      let bonus = this.salary + this._totalSubSalary();
      bonus = bonus * multiplier;
      
       return bonus;
    }
}



  module.exports = Manager;


module.exports = Manager;