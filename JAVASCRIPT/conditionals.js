// let age=8;
// if(age>18){
//     console.log("eligible for vote")
// }
// else{
//     console.log("not eligible for vote")
// }

// let weather="normal";
// if(weather === "rainy"){
//     console.log("take an umbrella")
// }
// else if(weather === "cold"){
//     console.log("take a jacket")
// }
// else if(weather === "sunny"){
//     console.log("take a sunglasses")
// }
// else{
//     console.log("Its a beautiful day")
// }

// let age=19;
// let result= age > 18 ? 'beer' : 'sprite';
// console.log(result);

let role=4;
let userStatus = role == 1 ? 'admin' : role == 2 ? 'student' : role ==3 ? 'team lead' : 'invalid user';
console.log(userStatus);
// let userStatuss = role == 0 ? 'student' : role == 1 ? 'teacher' : role == 2 ? 'admin' : 'invalid user';

// let age=26;
// if(age>18 && age<25){
//     console.log("eligible to apply")
// }
// else{
//     console.log("not eligible to apply")
// }
let age=26;
if(age>18 || age<25){
    console.log("eligible to apply")
}
else{
    console.log("not eligible to apply")
}

let friend="mouni";
if(friend === "sandhya" || friend === "laxmi" || friend === "yash"){
    console.log("i will be there for party")
}
else{
    console.log("i will not there for party")
}

let userName="ssadala"
let password="shiri";
if(userName === "ssadala" && password === "shiri"){
    console.log("login successful")
}
else{
    console.log("login failed")
}