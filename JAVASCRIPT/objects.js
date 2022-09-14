// let user={
//     name:"shiri",
//     email:"s@gmail.com",
//     age:25,
//     hobbies:['cricket','cooking']
// }
// console.log(user);
// console.log(user.name) // it will print only name of the user
// user.name="shirisha";  //it will update the value
// console.log(user);
// user.mobile=9866505106; //it will add new value to the user
// console.log(user);
// delete user.age; //it will delete the age from user entity
// console.log(user);
// console.log(user.hobbies[0]);

let users=[
    {
        name:"shiri",
        age:25
    },
    {
        name:'shiva',
        age:24
    },
    {
        name:"mahansh",
        age:3
    }
]
console.log(users[0].name)
users.push({name:"nitya",age:26})
console.log(users)