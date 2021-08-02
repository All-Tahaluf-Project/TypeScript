var num1 = 5;
var num2 = 7;
if (num1 > num2) {
    console.log('num1 Grater Than num2');
}
else {
    console.log('num1 Grater Than num2');
}
//switch
console.log("switch");
var Day = 4;
switch (Day) {
    case 1:
        {
            console.log('Monday ');
            break;
        }
        ;
    case 2:
        {
            console.log('Tuesday ');
            break;
        }
        ;
    case 3:
        {
            console.log('Wednesday ');
            break;
        }
        ;
    case 4:
        {
            console.log('Thursday ');
            break;
        }
        ;
    case 5:
        {
            console.log('Friday ');
            break;
        }
        ;
    case 6:
        {
            console.log('Saturday ');
            break;
        }
        ;
    case 7:
        {
            console.log('Sunday ');
            break;
        }
        ;
}
//for Loop
console.log("For");
for (var i = 0; i < 10; i++) {
    console.log('For : ' + i);
}
var Arr = [10, 20, 30, 40, 50];
console.log('For By Arrary');
for (var _i = 0, Arr_1 = Arr; _i < Arr_1.length; _i++) {
    var val = Arr_1[_i];
    console.log("val : " + val);
}
//While
console.log("while");
var Count = 0;
while (Count < 10) {
    console.log('while : ' + Count);
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
    K1: "a",
    K2: 1,
    K3: Fun1('My Function1'),
    K4: ['1', '2', '3', 4]
};
function Fun1(V) {
    console.log(V);
}
function Fun2(V) {
    console.log(V);
}
console.log("K1 : " + MyObject.K1 + "  K2 : " + MyObject.K2 + "  K3 : " + MyObject.K3 + "  K4 : " + MyObject.K4[1]);
MyObject.K1 = 'ABV';
MyObject.K2 = 1;
MyObject.K3 = Fun2('My Function2');
MyObject.K4.push(1.2);
console.log("K1 : " + MyObject.K1 + "  K2 : " + MyObject.K2 + "  K3 : " + MyObject.K3 + "  K4 : " + MyObject.K4[1]);
console.log('Array');
var MyArray = ['1', '2', '3'];
console.log(MyArray);
MyArray.push('AAA');
MyArray.push('BBB');
console.log(MyArray);
var Array1 = ['Val1', 'Val2'];
var Array2 = ['Val1', 'Val2'];
var MixArray = [Array1, Array2];
console.log(MixArray);
var Top1, Top2;
Top1 = Array1[0], Top2 = Array1[1];
console.log('Top1 : ' + Top1, "   Top2 : " + Top2);
//Arrow Function
console.log('Arrow Function');
var Sum = function (num1, num2) { return num1 + num2; };
console.log(Sum(10, 20));
