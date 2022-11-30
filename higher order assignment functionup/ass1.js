 const array = [23 , 45,467, 789, 34, 989, 56];

    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10
//const updateArray=array.map((item,index)=>item*(index%2==0?2:10));
//console.log(updateArray);
const answer = array.map((element, index) => index % 2 === 0 ? element * 10 : element * 2);
console.log(answer);