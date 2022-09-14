let users=[
    {
        name:"shiri",email:"s@gmail.com"
    },
    {
        name:"shiva",email:"shiva@gmail.com"
    },
    {
        name:"sandhya",email:"sandhya@gmail.com"
    },
    {
        name:"yash",email:"yash@gmail.com"
    },
    {
        name:"laxmi",email:"laxmi@gmail.com"
    },
    {
        name:"mouni",email:"mouni@gmail.com"
    },
    {
        name:"nitya",email:"nitya@gmail.com"
    },
    {
        name:"mahansh",email:"mahansh@gmail.com"
    },
    {
        name:"lasya",email:"lasya@gmail.com"
    },
    {
        name:"madhu",email:"madhu@gmail.com"
    },
]
let totalusers=users.length;
console.log(totalusers)
let winner=Math.floor(Math.random()*totalusers);
console.log(users[winner].name);