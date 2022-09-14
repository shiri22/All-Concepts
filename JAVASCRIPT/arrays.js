let hobbies=['cricket','cooking','reading']
// hobbies.push('dancing')                  push used to add elements at the end
console.log(hobbies);
// hobbies.pop();                           pop used to remove elements at the end
// hobbies.unshift('playing');              unshift  used to add elements at the beginning
// hobbies.shift();                         shift  used to remove elements at the beginning
// hobbies.splice(0,1);                     splice used to add and remove elements wherver we want 
// hobbies.splice(0,1,'playing','dancing')  it removes 1st element and add the remaining elements 
hobbies[1]='modeling'                    // it updates the existing element with new one
console.log(hobbies);
console.table(hobbies)