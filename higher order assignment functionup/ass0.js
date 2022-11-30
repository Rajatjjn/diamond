// ======================================================== //



//const practiceData = [[14,21,23,64], [33,46,51,65]]
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */

const practiceData = [[14,21,23,64], [33,46,51,65]]
let empty=[];
for (let i = 0; i < practiceData.length; i++) {
  let store=practiceData[i].filter(x=> x%2===0)
  empty.push(store)
  
}
console.log(empty)