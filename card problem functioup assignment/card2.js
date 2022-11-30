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

    function getSuitsList() {
const suitObject = {};
for (let index = 0; index < cardData.length; index++) {
const card = cardData[index];
const {suit} = card;
// this will make sure that duplicates are removed
suitObject[suit] = 1;
}
return Object.keys(suitObject);
}
 console.log(getSuitsList());

///**
 //   2. write a function which returns the list of available suits in the above data
 //* ans => ["heart", "club", "diamond"]

