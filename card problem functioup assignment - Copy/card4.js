
/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/
const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];
function getSuits(){
  const suitObj={};
  for(let i=0;i<cardData.length;i++){
    const card=cardData[i];
    const{suit,value}=card;
    if(suitObj[suit]){
      const valueList=suitObj[suit];
      suitObj[suit]=[...valueList,value];
    }else{
      suitObj[suit]=[value];
    }
  }
  return suitObj;
}
console.log(getSuits());
  
    


