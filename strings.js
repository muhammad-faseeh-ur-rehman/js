


// let userName = "ali"

// console.log(userName.length);


// console.log(userName.slice(0,2));


// let num = 343.4

// console.log(num.toFixed(02))

// let myDAte = new Date

// console.log(myDAte);
// let Arrey = ["ali", "ahmed", "khalid", "hammad" ];
// Arrey.push("fakhar");
// Arrey.pop();
// Arrey.unshift('orange')
// Arrey.shift();
// Arrey.splice(0,0,"grapes");
// let num1 = [1,2,3,4,5];
// let num2 = [6,7];
// console.log(num1.concat(num2));
// console.log(num1.at(2));
// num1.copyWithin(2,4);
// console.log(num1);
// console.log([...Arrey.entries()]);
// console.log(Arrey.includes("ali"));
// console.log([...Arrey.keys()]);
// let numbers = [1, 2, 3, 4, 5, 6];

// let evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);
// console.log(num1.every(x => x % 2 === 9));
// console.log(num2.fill(0));
// console.log(num1.find( x => x >2));
// console.log(num1.findLastIndex(x => x > 2));
// flatmap
// let a = [1, 2, 3];
// let result = a.flatMap(x => [ x * 2]);
// console.log(result);
// console.log(a.join("-"));
// console.log(result);
// let a = [1, 2, 3, 4];
// let result = a.reduce((sum, x ) => sum + x,0);
// console.log(a.shift());
// console.log(result);
let students = [
    {
        name: "faseeh",
        age: 20,
        department: "cs",
        Semester: 8,
        courses: ["Software Engineering", " Information Technology", "BBA"]
    },
    {
        name: "Danish",
        age: 40,
        department: "cs",
        Semester: 8,
        courses: ["Software Engineering", " Information Technology", "BBA"]

    },
    {
        name: "Ahmad",
        age: 30,
        department: "cs",
        Semester: 8,
        courses: ["Software Engineering", " Information Technology"]

    },

];
students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Department:", student.department);
    console.log("Semester:", student.Semester);
    console.log("courses:", student.courses);
    console.log([...students[0].courses.entries()]);
    console.log([...students[0].courses.filter((course) => {
        return course === 'BBA'
    })]);

    console.log("------------------");

})

// let result = students.filter(student => student.age === 20)
// console.log(result);

// let result1 = students.filter(student => student.name === 'faseeh')
// console.log(result1);














