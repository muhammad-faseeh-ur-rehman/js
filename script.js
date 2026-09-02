let username = "ali";
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.includes("a"));
console.log(username.startsWith("a"));
console.log(username.endsWith("i"));
console.log(username.indexOf("l"));
console.log(username.slice(0, 2));
let text = "Hello Ali";
console.log(text.replace("Ali", "Faseeh"));
let text2 = "ali ali ali";
console.log(text2.replaceAll("ali", "Faseeh"));
let name = "Ali Faseeh";
console.log(name.split(" "));
let text3 = "   Hello Ali   ";
console.log(text3.trim());
let name2 = "Ali";
console.log(name2.charAt(0));

// array //

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.length);
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);
console.log(fruits.slice(0, 2));
fruits.splice(1, 1);
console.log(fruits);
console.log(fruits.includes("Apple"));
console.log(fruits.indexOf("Mango"));
let numbers = [10, 20, 30, 40];
let result = numbers.find(function(num) {
    return num > 20;
});
console.log(result);
let result2 = numbers.findIndex(function(num) {
    return num > 20;
});
console.log(result2);
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);
let filtered = numbers.filter(function(num) {
    return num > 20;
});
console.log(filtered);
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log(total);
numbers.forEach(function(num) {
    console.log(num);
});
let checkSome = numbers.some(function(num) {
    return num > 30;
});
console.log(checkSome);
let checkEvery = numbers.every(function(num) {
    return num > 5;
});
console.log(checkEvery);
let nums = [30, 10, 40, 20];
nums.sort(function(a, b) {
    return a - b;
});
console.log(nums);
nums.reverse();
console.log(nums);
let names = ["Ali", "Ahmed", "Faseeh"];
console.log(names.join(" - "));

// math //
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.9));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));
console.log(Math.abs(-90));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(25));
console.log(Math.cbrt(27));
console.log(Math.PI);