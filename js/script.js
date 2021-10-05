//task#1
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

console.log(user);

delete user.name;

//task#2
const user1 = {
    name:"John"
};

user1.name = "Pete";
console.log(user1)

//task#3
let salaries = {
    John:100,
    Ann:160,
    Pete:130
};

let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(`Sum of salaries:${sum}`)