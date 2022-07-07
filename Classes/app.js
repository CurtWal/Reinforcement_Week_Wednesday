
// do ALL work inside main function. Please read instructions,
// and use comments to help you write out the process before coding.



const main = () => {


  // Problem 1:
  // Create a class Product that represents a product sold online.
  //  A product has a price, quantity and name.
  //   The class should have a method that prints a product's information in the following format:
  //    Banana, price 1.1, amount 13.
  //     Create two instances of the class and call the method created to print the product's details.

  // make an array
  const productArr = [];

  // make a class constructor
  class Product {
    // always write constructor then properties
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      productArr.push(this)
    }
    // Method
    product() {
      return (console.log(`${this.name}, ${this.price}, ${this.quantity}`))
    }
  }
  // create object
  let newProduct = new Product("Banana", "price 1.1", "amount 13")
  // call the method
  newProduct.product();


  // Problem 2:
  // Create a GitHubRepository class with properties: userName, fileName, descriptionOfRepository, and code. 
  // Create a function that prints all properties.
  // Create an instance of the class and use the function.
  let gitArr = [];
  class GitHubRepository {
    constructor(userName, fileName, descriptionOfRepository, code) {
      this.userName = userName;
      this.fileName = fileName;
      this.descriptionOfRepository = descriptionOfRepository;
      this.code = code;
      gitArr.push(this);
    }
    // methods
  }
  let newGit = new GitHubRepository('CurtWal', 'Constructor Classes', 'Classes Pratice', 'let n = 2')
  console.log(newGit);


  //   Problem 3:
  //   - Define a class called Pet with three properties: type, breed and age.
  let newPetArr = [];
  class Pet {
    constructor(type, breed, age) {
      this.type = type;
      this.breed = breed;
      this.age = age;
      newPetArr.push(this);
    }
    //   - Create a method called formatProperties that prints all object properties using string templating.
    formatProperties() {
      console.log(`type: ${this.type}, breed: ${this.breed}, age: ${this.age}`)
    }
    //   - Create a method called changeAge that takes a number and updates the age property of an object.
    changeAge() {
      let newAge = 15;
      console.log(`type: ${this.type}, breed: ${this.breed}, age: ${newAge}`)
    }
    //   - Create a method called dogYears that checks if the pet type of the object is dog, 
    // if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!". 
    dogYears() {
      // if the pet type is a dog the multiply by 7 
      if (this.type === 'Dog') {
        return (console.log(this.age * 7))
      }
      // if the type is not a dog the do this
      else {
        return (console.log(`${this.type} is not a dog`))
      }
    }
  }
  //   - Create an instance of the Pet Class called pet1. 
  let pet1 = new Pet('Dog', 'Lab', '1')
  //   - Print all property values of the object using the class method.
  pet1.formatProperties();

  //   - Create another instance of the Pet Class with diffrent property values called pet2.
  let pet2 = new Pet('Dog', 'Rottweiler', '3')
  //   - Print all property values of the object using the class method. 
  pet2.formatProperties();
  //   - Change the age grade of pet1. 
  pet1.changeAge();
  //   - Print the age of pet1 in dog years using the class method.
  pet1.dogYears();
  //   - Print the age of pet2 in dog years using the class method
  pet2.dogYears();


  // Problem 4:

  // Create a People class with three properties: name, weight, and height.
  let peopleArr = [];
  class People {
    constructor(name, weight, height) {
      this.name = name;
      this.weight = weight;
      this.height = height;
      peopleArr.push(this);
    }

    //  Create a method that can calculate the BMI of a person using the formula below.
    // EXAMPLE OUTPUT: BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
    bmi() {
      return console.log(`Your BMI is: ` + (`${this.weight}` / (`${this.height}` * `${this.height}`)) * 703)
    }
  }

  //  Create an instance of the class and use the function.
  let newPerson = new People('Tom', '150', '75');
  console.log(newPerson);
  newPerson.bmi();



  // CHALLENGE 1:

  // Create a Person Class with the properties Name (first, last), Age, Interests, Bio ('NAME is AGE years old. They like INTERESTS')
  let personArray = [];
  class Person {
    constructor(name, age, interests) {
      this.name = name;
      this.age = age;
      this.interests = interests;
      this.bio = (`${this.name} is ${this.age} years old. They like ${this.interests}`);
      personArray.push(this);
    }

  }
  let newPeople = new Person("John, Forn", 21, 'games', this.bio)
  console.log(newPeople);

  // Create a class called Student that extends Person and adds the property Cohort to student.
  class Student extends Person {
    constructor(name, age, interests, bio, cohort) {
      super(name, age, interests, bio)
      this.cohort = cohort;
    }
  }

  let newStudent = new Student("Same, Copper", 28, 'Reading', this.bio, 'graduating class of 2004')
  console.log(newStudent);

  // Create a class called Teacher that extends Person and adds the properties subject, and students (students should be an array of Student objects) Create a method called addStudent that takes an instance of Student and adds a student object to the students array.
  class Teacher extends Person {
    constructor(name, age, interests, bio, subject, students) {
      super(name, age, interests, bio)
      this.subject = subject;
      this.students = [];
    }
    addStudent(addedStudents) {
      return this.students.push(addedStudents);
    }

      // Create a method called listAllStudents that prints every student name and student cohort associated with a teacher.
    listAllStudents() {
      for (let i = 0; i < this.students.length; i++) {
        console.log(`${this.students[i].name}, ${this.students[i].cohort}`);
      }
    }
  }
  
  
  // Create an instance of the Teacher class called teacher1 with an empty student array.
  let teacher1 = new Teacher("Nate , Jam", 38, 'Teaching and Jogging', this.bio, 'World History')

  let student1 = new Student('Slim ,Pick', 28, 'Driving and Eating',this.bio, 2025);
  let student2 = new Student('Copper, Young', 25, 'Running and Hitting the Gym',this.bio, 2028);

  //  Create another instance of this class called teacher2 with an empty student array.
  let teacher2 = new Teacher('Tim, Link', 40, 'Coding and Watching Videos', this.bio, 'Algebra');
  
  let student3 = new Student('Sam, Cop', 29, 'Sleeping and Studting',this.bio, 2024);
  let student4 = new Student('Tommy, Williams', 36, 'Coding and Reading',this.bio, 2025);

  //   Add two students to teacher1 using the class method. 
  teacher1.addStudent(student1);
  teacher1.addStudent(student2);
  console.log(teacher1);

  //   Add two students to teacher2 using the class method.
  teacher2.addStudent(student3);
  teacher2.addStudent(student4);
  console.log(teacher2);

  //   List all students associated with teacher1 using the class method.
  //   List all studnets associated with teacher2 using the class method.
  teacher1.listAllStudents();
  teacher2.listAllStudents();

};

main();



