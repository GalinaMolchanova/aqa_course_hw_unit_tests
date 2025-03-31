class Employee {
  #salary;

constructor(firstName, lastName, profession, salary) {
this._firstName = firstName;
this._lastName = lastName;
this._profession = profession;
this.#salary = salary;
};


get firstName() {
  return this._firstName
};

set firstName(newFirstName) {
  if (typeof(newFirstName) !== 'string' || newFirstName.length < 2 || newFirstName.length > 50 || !/^[A-Za-z]+$/.test(newFirstName)) {
    throw new Error('Invalid value')
  }  
    this._firstName = newFirstName
};

get lastName() {
  return this._lastName
};

set lastName(newLastName) {
  if (typeof(newLastName) !== 'string' || newLastName.length < 0 || newLastName.length > 50 || !/^[A-Za-z]+$/.test(newLastName)) {
    throw new Error('Invalid value')
  }  
    this._lastName = newLastName
};

get profession() {
  return this._profession
};

set profession(newProfession) {
  if (typeof(newProfession) !== 'string' || newProfession.trim().length === 0 || !/^[A-Za-z\s]+$/.test(newProfession)) {
    throw new Error('Invalid value')
  }  
    this._profession = newProfession
};

get salary() {
  return this.#salary
};

set salary(newSalary) {
  if (!newSalary || newSalary < 0 || newSalary >= 10000 || typeof(newSalary) !== 'number') {
    throw new Error ('Invalid value')
  }
  else this.#salary = newSalary
};

getFullName() {
  return `${this._firstName} ${this._lastName}`;
}
}

class Company {
#employees

constructor(title, phone, address, employees = []) {
  this._title = title;
  this._phone = phone;
  this._address = address;
  this.#employees = employees;
  };

  get title() {
    return this._title
  };

  get phone() {
    return this._phone
  };

  get address() {
    return this._address
  };

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee)
    }
    else throw new Error('Employee is not an instance of Employee class')
  };

  getEmployees() {
    return this.#employees
  };
 
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`
  };

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(employee => employee.firstName === firstName);
    if (employee) {
      return employee;
    } else {
      throw new Error('Employee is not found');
    }
  };

  getEmployeeIndex(firstName) {
    const employeeIndex = this.#employees.findIndex(employee => employee.firstName === firstName);
    if (employeeIndex === -1) {
      throw new Error('Employee with such firstName not found');
    } else {
      return employeeIndex;
    }
  };

  removeEmployee(firstName) {
    this.#employees.splice(this.getEmployeeIndex(firstName), 1);
  };

  getTotalSalary() {
    return this.#employees.reduce((total, employee) => total + employee.salary, 0);
  };

}

export { Employee, Company };
