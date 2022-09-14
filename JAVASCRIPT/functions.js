function grinder(items){
    console.log("grinding...", items)
}
grinder('tamotoes');
grinder("potatoes");

function add(num1,num2){
    console.log(num1+num2);
}
add(10,20);
add(20,30)

function calculate(salary){
    let tds=salary*0.1;
    console.log(tds)
    return tds; //if you want to print outside the function then return that variable
}
let total=calculate(34500);
console.log(total);

//arrow function
const calculates=(salary)=>{
    let tds=salary*0.1
    return tds;
}
let totals=calculates(34500);
console.log(totals);


const addings=(num1,num2)=>{console.log(num1+num2)}
addings(10,90);

const adding=(num1,num2)=>{return(num1+num2)}
console.log(adding(10,90));