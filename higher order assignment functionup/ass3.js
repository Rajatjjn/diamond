
 /**
  *  Flattening
 Use the reduce method 
 to â€œflattenâ€ an array of arrays into a single array that has all the elements of the original arrays.
 
 const array = [[1, 2, 3], [4, 5], [6]];
 // result =  [1, 2, 3, 4, 5, 6]
  * 
  * 
  */
const array = [[1, 2, 3], [4, 5], [6]];
let answer=array.reduce((acc, curr) => {
acc = [...acc, ...curr]
return acc
}, [])
console.log(answer);