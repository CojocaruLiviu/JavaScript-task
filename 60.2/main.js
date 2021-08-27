class Person {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  getName(){
      return this.name;
    }
    
  getSurname(){
    return this.surname;
  }

  setSurname(value){
    this.surname = value;
  }


};

let worker = new Person('Иван', 'Иванов');
console.log(worker.name);
console.log(worker.surname);

console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.setSurname('Ion'));
console.log(worker.getSurname());

