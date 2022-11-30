/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
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

function findCard(value, suit) {
  for(i=0;i<=cardData.length-1;i++){
    const card=cardData[i];
    if(card.suit===suit && card.value===value){
      return true
    }
    
  }
return false;
}

console.log( findCard(5, "diamond") );

