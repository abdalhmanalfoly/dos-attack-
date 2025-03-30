/*let theName: string = "abdo";
let theAge:number = 30;
let theCountry = "Egypt";
let theJob:boolean = true
let ALL:any = "any type";

theName = "ahmed";
theAge = 20;
theCountry = "USA";
theJob = false;
ALL = "any ";
console.log(theName, theAge, theCountry, theJob);


let myFriends: string[] = ["ahmed", "mohamed", "ali"];

let myNumbers: number[] = [1, 2, 3, 4, 5];

let numbers: (number| string | (string | number)[]  )[] = ["s",1, 2, 3, 4, 5,["s",1, 2, 3, 4, 5]];


const add = function(num1: number, num2: number): number  {
    return num1 + num2;
}

console.log(add(1, 2));

const addwitha
    = (num1: number, num2: number): number => {
        return num1 + num2;
    }
    
console.log(addwitha(10, 20));


type Person = {
    name: string,
    age: number,
    country: string,
    job: boolean
}

type last = Person & {
    x: number
    z: string
    y: boolean
}


interface User {
    userName: string,
    id: number,
    country: string,
    job: boolean
}

let user: User = {
    userName: "ahmed",
    id: 1,
    country: "Egypt",
    job: true
}

const getData = (data : User)=>{
    console.log(data.id);
}

getData(user);


   */
var Person = /** @class */ (function () {
    function Person(userName, salary) {
        var _this = this;
        this.userName = userName;
        this.salary = salary;
        this.msg = function () {
            return "\"Hello ".concat(_this.userName, "\" and salary is ").concat(_this.salary);
        };
    }
    Person.prototype.saymsg = function () {
        return "\"Hello ".concat(this.userName, "\" and salary is ").concat(this.salary);
    };
    return Person;
}());
var userone = new Person("ahmed", 2000);
// Test the methods
console.log(userone.msg()); // Output: "Hello ahmed" and salary is 2000
console.log(userone.saymsg()); // Output: "Hello ahmed" and salary is 2000
