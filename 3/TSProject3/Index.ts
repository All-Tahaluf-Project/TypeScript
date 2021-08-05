// //Exam
var User = {
    FirstName: 'Osama',
    LastName: 'AL-Daja',
    Email: 'Osama@gmail.com',
    Age: 25,
    Order: [],
    isPremium: false
};
var SystemUser = [
    {
        FirstName: 'Osama1',
        LastName: 'AL-Daja',
        Email: 'Osama@gmail.com',
        Age: 25,
        Order: [
            {
                mealName : "Burger",
                Price : 10
            }
        ],
        isPremium: false
    },
    {
        FirstName: 'Osama2',
        LastName: 'AL-Daja',
        Email: 'Osama@gmail.com',
        Age: 25,
        Order: [
            {
                mealName : "Burger1",
                Price : 101
            }
        ],
        isPremium: true
    },
    {
        FirstName: 'Osama3',
        LastName: 'AL-Daja',
        Email: 'Osama@gmail.com',
        Age: 25,
        Order: [
            {
                mealName : "Burger1",
                Price : 101
            }
        ],
        isPremium: true
    }
];

// //1
// const NewArray = [];
// for(var val of SystemUser)
// {
//     if(val.isPremium){NewArray.push(val);}
// }
// console.log(NewArray);


// //2
// //Arrow Function (a,Index)
// var NewArrayfilter = SystemUser.filter((a,Index)=>a.isPremium && Index%2 ==0);
// console.log(NewArrayfilter);

// var MyVal = SystemUser.find(a=>a.isPremium);
// console.log(MyVal);



// //Map
// //1
// var AMap = SystemUser.map((user,Index)=> 
// { 
// const {FirstName,isPremium} = user;
// return {FirstName,isPremium};
// });
// console.log(AMap);

// //2
// var AMap1 = [];
// for(var V of SystemUser)
// {
//     var NewV = {FirstName : V.FirstName,LastName : V.LastName};
//     AMap1.push(NewV);
// }
// console.log(AMap1);

// //3
// var AMap2 = [];
// for(var V of SystemUser)
// {
// //destractore
//     const{FirstName,LastName}=V;
//     AMap2.push({FirstName:FirstName,LastName:LastName});
// }
// console.log(AMap2);




//Exam
// //1
// SystemUser.find(a=> a.FirstName == 'Osama1').Order.length = 0;
// console.log(SystemUser);
// //2
// for(var NewVal of SystemUser)
// {
//     if(NewVal.Order.length != 0 && NewVal.FirstName == 'Osama1'){ NewVal.Order.length = 0;}
// }
// console.log(SystemUser);


// //Keys
// const UserInfo : any = {
//     firstName : 'Soos',
//     LastName : 'DJ',
//     age:'25'
// }
// //Print Key = Value
// Object.keys(UserInfo).forEach((Key:any)=>{
//     console.log(`${Key} = ${UserInfo[Key]}`);
// })



var NewList = SystemUser.filter(a=>a.isPremium).map((user)=>{
   const {FirstName,LastName} = user;
   return {FirstName,LastName};
});

console.log(NewList);


