const user = {
  id: 1,
  username: "jdoe"
};

console.log(user);
const newUserObject = {
  ...user,
  username: "bob"
};

// let newObject = {};
// Object.keys(user).forEach((key) => {
//   newObject[key] = user[key];
// });
console.log(newUserObject);

let arr1 = [1, 2, 3, 4];

const arr2 = [...arr1, 5, 6];

console.log(arr2);
