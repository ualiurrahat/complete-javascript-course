const rahat = {
  firstName: "ualiur",
  lastName: "rahat",
  profession: "student",
  cgpa: 3.25,
  friends: ["ayon", "nasim", "ripon", "minul"],
  birthYear: 1998,
  hasDrivingLicense: false,
  //   calcAge: function (birthYear) {
  //     return 2024 - birthYear;
  //   },

  //   calcAge: function () {
  //     console.log(this);
  //     return 2024 - this.birthYear;
  //   },

  // creating the age property inside a function of an object
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

console.log(rahat); // no age property displayed here
// the age property is created only after we call calcAge function
console.log(rahat.calcAge());
console.log(rahat); // age propery added since we called calcAge() already
// console.log(rahat["calcAge"](1998));
console.log(rahat.age);

// challenge
// rahat is 26 years old and he has a/no driving license
const ans = `${rahat.lastName} is ${rahat.age} years old and he
has ${rahat.hasDrivingLicense == true ? "a" : "no"} driving license
`;
console.log(ans);
