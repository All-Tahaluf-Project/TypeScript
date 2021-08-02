



var Name :string = "Osama";

//Error (Data Type)
//Name = 1;

var IsUpdated : boolean = false;

var Num : number = 1;


//Data Type Take From Initial Create
// var Num1 = 7;
// Num1 = "a";


//Data Type Can Change
var NumAny:any=5;
NumAny = "";





function Add(num1:number,num2:number)
{
    return num1+num2;
}

const Summation = Add(1,2);
console.log(Summation);














var Num1 = document.getElementById("Num1")! as HTMLInputElement;
var Num2  = document.getElementById("Num2")! as HTMLInputElement;

function Sum(Num1,Num2)
{
    return Num1+Num2;
}

function PrintResult()
{
console.log(console.log(Sum(Num1.value,Num2.value)));
}





