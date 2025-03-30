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
  this._firstName = newFirstName
};

get lastName() {
  return this._lastName
};

set lastName(newLastName) {
  this._lastName = newLastName
};

get profession() {
  return this._profession
};

set profession(newProfession) {
  this._profession = newProfession
};

get salary() {
  return this.#salary
};

set salary(newSalary) {
  if (newSalary < 0 || typeof(newSalary) !== 'number') {
    throw new Error ('Invalid value')
  }
  else this.#salary = newSalary
};

getFullName() {
  return `${this._firstName} ${this._lastName}`;
}

};

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName);
emp1.salary = 3100;
console.log(emp1.FullName);

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

}

export { Employee, Company };
