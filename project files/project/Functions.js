// function sum(x,y){
// s = x + y;
// return s;
// }
// console.log(sum(2,4));

// const arrowsum = (a,b) =>{
// console.log(a+b);
// }




// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u"){
//         count++;
//         }
//     }
//   return count;
// }



// let arr = [1,2,3,4,6];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val) =>{
//     console.log(val);
// })



// let arr = [2,4,5, 3];
// arr.forEach((val) =>{
//     console.log(val*val);
// })




// let nums = [3,5,6,2];

// let newArr = nums.map((val) =>{
//     return val*val;
// });
// console.log(newArr);

// let calSquare = (num) =>{
//     console.log(num*num);
// }
// nums.forEach(calSquare);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//  let newEven = arr.filter((val) =>{
//     return val % 2 ===0;
// })
// console.log(newEven);



let arr = [23, 95, 45,84, 89];
let newArr = arr.filter((val) => {
    return val>50;
})
console.log(newArr);