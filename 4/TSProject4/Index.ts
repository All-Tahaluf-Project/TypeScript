


// class Pesron{
//     FirstName : string ;
//     LastName : string ;
//     Age: number;
//     Data : Date;
// constructor(FN : string,LN : string,age:number) {    
//     this.FirstName = FN;
//     this.LastName = LN;
//     this.Age = age;
//     this.Data = new Date();
// }

// Print=()=>{
//     console.log('FirstName : ' + this.FirstName + '  LastName : ' + ' Age : ' + this.Age + ' Date : ' + this.Data);
// }
// }


// var P = new Pesron('FN','LN',20);
// P.FirstName = 'Edit_FN'
// console.log(P);

// P.Print();



//! Exam
// class User{
//     NickName : string ;
//     Age: number;
//     Data : Date;
// constructor(NN : string,age:number) {    
//     this.NickName = NN;
//     this.Age = age;
//     this.Data = new Date();
// }

// Print=()=>{
//     console.log('NickName : ' + this.NickName + ' Age : ' + this.Age + ' Date : ' + this.Data);
//     //console.log(this);
// }
// }


// var user = new User('Osama',25);

// user.Print();






//! Defoult ctor

// class User{
//     NickName : string ;
//     // ? To Make Value Accept Undefined
//     Age?: number;
//     Data : Date;
// //constructor( NN : string = '' == '' || undefined ?'UnKnown' : 'Empty',age:number = 0) {   
//     constructor( NN : string,age?:number){

//         //? To Check If NN equal undefined Or ''(Empty) Make NickName Equal UnKnown
//     this.NickName = NN || 'UnKnown';
//     this.Age = age;
//     this.Data = new Date();
// }

// Print=()=>{
//     console.log('NickName : ' + this.NickName + ' Age : ' + this.Age + ' Date : ' + this.Data);
//     //console.log(this);
// }
// }


// var user = new User(undefined);
// user.Print();

// var user1 = new User('');
// user1.Print();











//! Composition
//? Make Class In Another Class
class City
{
    Name : string;

    constructor(N : string) {
        this.Name = N;
    }
}

class Address
{
    Street : string;
    City : City;
    constructor(S : string, CN : string) {
        this.Street = S;
        this.City = new City(CN);
    }
}









//! Interface
interface IUser{
    FN :string;
    LN ?:string;
    Age ?:number;
}

var User:IUser= {FN : ''}

interface IEmployee {
     Code: number;
     Name: string;
     salary : number;
    getSalary: (N:number) => number;
}

class Employee implements IEmployee{
    Code: number;
    Name: string;
    salary : number;
    constructor(C : number,Name :string,S:number) {
        this.Code = C; 
        this.Name = Name;
        this.salary = S;
    }

    getSalary(N:number):number{
        return N;
    }
}
var E = new Employee(1,'Osama',1000);

console.log(E);
console.log(E.getSalary(1000))

//! Enum
enum Roles{Employee='Employee',Manager='Manager',Customer='Customer'};

console.log(Roles.Employee);

console.log(Roles.Manager);

console.log(Roles.Customer);

//? First Element Declare Data Type
enum Roles1{Employee=1,Manager,Customer};

console.log(Roles1.Employee);

console.log(Roles1.Manager);

console.log(Roles1.Customer);








//! 
//? Private : In Same Class
//? Protracted : In Same Class And Derived Class
//? Public : In And Out Class
