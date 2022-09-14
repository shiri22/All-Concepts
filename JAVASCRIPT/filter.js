// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filters=numbers.filter(item=>item>5)
// console.log(filters)

// let nums=[1,2,3,4,5];
// let res=nums.map(item=>item*item*item);
// // console.log(res);
// let result=res.filter(item=>item>50);
// console.log(result)


// let nums=[1,2,3,4,5];
// let res=nums.map(item=>item*item*item).filter(item=>item>50);
// console.log(res);

let nums = [1, 2, 3, 4, 5];
let res = nums.map((item) => {
    return item * item * item
}).filter((item) => {
    return item > 50
})
    ;
console.log(res);

