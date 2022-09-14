// let numbers=[1,2,3,4,5,5];
// let value=numbers.reduce((previous,current)=>{
//     let sum=previous+current;
//     return sum;
// })
// console.log(value)

// let value=[1,2,3,10,12,4,15,5,26];
// let great=value.reduce((previous,current)=>{
//     if(current>previous){
//         return current;
//     }
//     else{
//         return previous;
//     }
// })
// console.log(great);

let numbers = [1, 45, 67, 2, 3, 76, 0, 4];
let res = numbers.reduce((pre, cur) => {
  console.log(pre, cur);
});
