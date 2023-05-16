// export {}
// class App{
//     test(){
//         console.log("test function")
//     }
// }
// let a1=new App()
// a1.test()


// ARRAY

// let data:string[]=['anil', 'nishu', 'nishant']
// data.push("nish")
// console.log(data)

//OBJECT

// interface userTyped{
//     name:string,
//     age:number,
//     address:any,
// }
// let user:userTyped={
//     name:"nishant",
//     age:30,
//     address:"india"
// }

// let user:any={
//     name:"nishant",
//     age:30,
//     address:"india"
// }
// user.name="vishal"
// console.log(user)

//union type

// let data:string|number = "anil"
// data=30;
// console.log(data)

//interface in typescript

// interface userTyped{
//     name:string,
//     age:number,
//     address:any,
//     getName:()=>string,
// }

// let user:userTyped={
//     name:"nishant",
//     age:30,
//     address:"india",
//     getName:function(){
//       return "nishu"
//     }
// }
// user.name="vishal"
// console.log(user.getName())



//Function

// function cals(a:number, b:number):number{
//     return b?a+b:a
// }

// console.log(cals(100,50))


// class

// class App{
//     name="nishant jangir"
//     constructor(){
//         console.log("const called")
//     }
//     getName(){
//        console.log(this.name) 
//     }
// }
// let a1= new  App()
// a1.getName()

// or


// class App{
//     name;
//     constructor(name){
//         this.name=name
//     }
//     getName(){
//        console.log(this.name) 
//     }
// }
// let a1= new  App("anil")
// a1.getName()


// //inhertense
// class Parent{
//     name;
//     setName(name){
//         this.name=name
//     }
// }

// class Child extends Parent{
//     // name="nishant";
//     getName(){
//         return this.name
//     }
// }
// let c=new Child()
// c.setName("peter")
// console.log(c.getName())



//namespace

// /// <reference path="./user.ts" />
// namespace Users
// {
//     export class Client extends Parent{
//         getName(){
//             return this.name
//         }
//     }
// }
// let ul= new Users.Client()
// ul.setName("vishal")
// console.log(ul.getName())


// MODULE


