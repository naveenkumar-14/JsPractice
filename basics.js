const user = { id: 1, name: 'John', age: 25 };
const { id, ...details } = user;
console.log(details); // Output: { name: 'John', age: 25 }
