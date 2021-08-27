class Person {
  constructor(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary(){
      return this.name + ' ' + this.rate * this.days;
    }
    


};

let worker = new Person('Иван', 'Иванов', 10, 31);
let worker1 = new Person('Anton', 'Leo', 11, 30);

console.log(worker.getSalary());
console.log(worker1.getSalary());
