let numbers=[56,2,3,78,98,105,5,6];
let great=numbers.reduce((max,cur)=>{
    if(cur>max){
        max=cur;
    }
        return max;
},0)
console.log(great)