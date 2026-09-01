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

let result = students.filter(student => student.age === 20)
console.log(result);

let result1 = students.filter(student => student.name === 'faseeh')
console.log(result1);