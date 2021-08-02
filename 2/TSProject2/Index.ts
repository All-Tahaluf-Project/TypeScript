

const num1:number=5;
const num2:number=7;

if(num1>num2)
{
    console.log('num1 Grater Than num2');
}else
{
    console.log('num1 Grater Than num2');
}


//switch
console.log("switch");
var Day = 4;
switch(Day)
{
    case 1 : {console.log('Monday '); break};
    case 2 : {console.log('Tuesday '); break};
    case 3 : {console.log('Wednesday '); break};
    case 4 : {console.log('Thursday '); break};
    case 5 : {console.log('Friday '); break};
    case 6 : {console.log('Saturday '); break};
    case 7 : {console.log('Sunday '); break};
}




//for Loop
console.log("For")
for(let i = 0;i<10;i++)
{
    console.log('For : ' + i);
}

var Arr = [10,20,30,40,50];

console.log('For By Arrary');
for(var val of Arr)
{
    console.log("val : " + val);
}

//While
console.log("while");
var Count = 0;
while(Count < 10)
{
    console.log('while : ' + Count)
    Count++;
}

//do while
console.log("do while");
Count = 0;
do {
    console.log('do while : ' + Count);
    Count++;
} while (Count < 10);









//Object
console.log('Object');
var MyObject = {
    K1 : "a",
    K2 : 1,
    K3 : Fun1('My Function1'),
    K4 : ['1','2','3',4]
};
function Fun1(V : string)
{
    console.log(V);
}
function Fun2(V : string)
{
    console.log(V);
}

console.log("K1 : " + MyObject.K1 + "  K2 : " + MyObject.K2 + "  K3 : " + MyObject.K3 + "  K4 : " + MyObject.K4[1])

MyObject.K1 = 'ABV';
MyObject.K2 = 1;
MyObject.K3 = Fun2('My Function2');
MyObject.K4.push(1.2);
console.log("K1 : " + MyObject.K1 + "  K2 : " + MyObject.K2 + "  K3 : " + MyObject.K3 + "  K4 : " + MyObject.K4[1]);


console.log('Array');
var MyArray:string[] = ['1','2','3'];
console.log(MyArray);

MyArray.push('AAA');
MyArray.push('BBB');
console.log(MyArray);


var Array1 = ['Val1','Val2'];
var Array2 = ['Val1','Val2'];
var MixArray = [Array1,Array2]
console.log(MixArray);

var Top1,Top2;
[Top1,Top2] = Array1;
console.log('Top1 : ' + Top1, "   Top2 : " + Top2);





//Arrow Function
console.log('Arrow Function');
const Sum = (num1 : number,num2 : number) => { return num1+num2};
console.log(Sum(10,20));



