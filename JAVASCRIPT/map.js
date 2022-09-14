let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// for(let i=0;i<numbers.length;i++){
//     let numm=numbers[i]*numbers[i];
//     console.log(numm);
// }

let num = numbers.map((item) => {
    return item * item          //when you write the code in next line use return otherwise write it in same line
}
);
console.log(num)

let nums = numbers.map(item => item * item);       //when you write the code in next line use return otherwise write it in same line});
console.log(nums)