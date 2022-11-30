//function getFullName(facebookProfiles) {
    //write your code here
//}

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


const facebookProfiles = [
    
{
firstName: "Akash",
lastName: "Agarwal",
number: "111111111",
likes: ["music", "movies"],
hasDrivingLicense: false,
address: {
location: "rampur",
state: "up",
},
emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
},
{
firstName: "Pritesh",
lastName: "Kumar",
number: "222222222",
likes: ["code", "driving"],
hasDrivingLicense: false,
address: {
location: "gurgaon",
state: "haryana",
},
emails: ["fgdfg@gmail.com"],
},
{
firstName: "Sabiha",
lastName: "Khan",
number: "333333333",
hasDrivingLicense: false,
address: {
location: "lucknow",
state: "up",
},
},
{
firstName: "Suyash",
lastName: "Kashyap",
number: "444444444",
likes: ["travel", "driving"],
hasDrivingLicense: true,
address: {
location: "alwar",
state: "rajasthan",
},
emails: ["abc@yahoo.com"],
},
{
firstName: "Jay",
likes: ["food", "mobile"],
hasDrivingLicense: true,
address: {
location: "gurgaon",
state: "haryana",
},
emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
},
];
function printNamesUpdated() {
const nameArr = [];
for (let i = 0; i < facebookProfiles.length; i++) {
const { firstName, lastName } = facebookProfiles[i];
const fullName = firstName + " " + (lastName || "");
nameArr.push(fullName);
}
return nameArr
}
console.log(printNamesUpdated())