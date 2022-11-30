

// ================================== 1 ====================================== //

//function getNamesFromGurgaon(facebookProfiles) {
    //write your code here
//}
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']
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
function getNamesFromGurgaon() {
const result = [];
for (let index = 0; index < facebookProfiles.length; index++) {
const person = facebookProfiles[index];
if (person.address.location === "gurgaon") {
//Edge case: when last name is not present
const name = person.firstName + " " + (person.lastName || "");
result.push(name);
}
}
return result;
}
console.log(getNamesFromGurgaon())