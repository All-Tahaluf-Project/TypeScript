


// class Mark{
//     Mark1V : number;
//     Mark2V : number;

//     //! set (Take One Parameter)
//     set Mark(NewMark : number)
//     {
//         this.Mark1V = NewMark;
//     }
//     get Mark()
//     {
//         return this.Mark1V;
//     }

//     set Mark2(NewMark : number)
//     {
//         this.Mark2V = NewMark;
//     }
//     get Mark2()
//     {
//         return this.Mark2V;
//     }

//     fun(S : string|number)
//     {
//         if(typeof(S) == 'string')
//         {
//             console.log('Invalid Value.')
//         }else
//         {
//             this.Mark1V = S;
//         }
//     }
// }

// var M = new Mark();

// M.fun('1');
// M.fun(1);
// M.Mark = 111;
// console.log(M.Mark);




















// class Person {
//     Name ?:string;
//     Age ?:number;

//     constructor(name :string,age : number)
//     {
//         this.Name = name;
//         this.Age = age;
//         console.log('Person Class!!!');
//     }

//     Speak()
//     {
//         console.log('Speaking Arabic')
//     }

//     Display(){
//         console.log('Name : ' + this.Name);
//         console.log('Age : ' + this.Age);
//     }
// }


// class Teacher extends Person{

//     TotalMark :number;
//     constructor(name :string,age : number,totalMark : number) {
//         //! Super Is constructor For Person
//         super(name,age);
//         this.TotalMark = totalMark;

//         console.log('Teacher Class!!!');
//     }

//     explian(){
//         console.log('Explian Method');
//     }
// }

// class MasterStudent extends Teacher
// {
//     private ScoreV :number;
//     constructor(name :string,age:number,totalmark:number,score:number) {
//         super(name,age,totalmark); 
//         this.ScoreV = score;
//     }

//     get Score (){
//         return this.ScoreV;
//     }
//     set Score(score :number){
//         this.ScoreV = score;
//     }

//     getMark()
//     {
//         console.log(this.Score + ' Of ' + this.TotalMark);
//     }

//     Speak(){
//         super.Speak();
//         console.log('Speaking2');
//     }

//     Display(){
//         super.Display();
//         console.log('Score : ' + this.Score);
//     }
// }


// //! Parent
// console.log('Person');
// var Person1 = new Person('Person1',10);
// Person1.Display();
// console.log(Person1);

// //! Derived
// console.log('Techer');
// var Techer1 = new Teacher('Techer1',10,100);
// console.log(Techer1);
// Techer1.Display();
// Techer1.explian();

// //! Derived1
// console.log('MasterStudent');
// var Student = new MasterStudent('Student',20,100,60);
// console.log(Student);
// Student.Score = 80;
// Student.Speak();
// Student.Display();


























class Address{
    StreetName : string;
    City:string;
    postalCode:string;

    constructor() {
        console.log('Address Class!!!');
    }
}

class Employee{
    EmployeeName :string;
    EmployeeAge : number;
    EmployeeLevel:number;
    EmployeeSalary : number;

    constructor(Name : string,Age:number,Level:number,Salary:number) {
        this.EmployeeName = Name;
        this.EmployeeAge = Age;
        this.EmployeeLevel = Level;
        this.EmployeeSalary = Salary;
    }


}

class Business{
    static NumberOfBusiness : number = 0;
    Name :string;
    Logo : string;
    Slogan:string;
    private BusinessEmail :string[];
    private MobileNumber : string;
    private EmployeeNumber : number;
    protected WorkHours:string;

    protected Employees : Employee[] = [];

    constructor() {
        console.log('Business Class!!');
        Business.NumberOfBusiness++;
        console.log(Business.NumberOfBusiness);
    }

    AddEmployee(EmployeeName : string,EmployeeAge:number,EmployeeLevel:number,EmployeeSalary:number)
    {
        var employee = new Employee(EmployeeName,EmployeeAge,EmployeeLevel,EmployeeSalary);
        this.Employees.push(employee);
    }

}

class Restaurant extends Business{
    MealsOffers:string[];
    Discount:number[];
    Address :Address;

    constructor() {
        console.log('Restaurant Class !!!');
        super();
        this.Address = new Address();
    }
    
}

var R = new Restaurant();
R.Name = 'RestaurantName';
R.Slogan = 'RestaurantSlogan';
R.AddEmployee('Osama1',10,2,400);
R.AddEmployee('Osama1',102,22,4002);
R.AddEmployee('Osama1',102,22,4002);
R.AddEmployee('Osama1',103,23,4003);

console.log(R);


var R1 = new Restaurant();
var R2 = new Restaurant();
var R3 = new Restaurant();
console.log('Final : ' + Business.NumberOfBusiness);






