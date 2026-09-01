let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        department: "CS",
        semester: 7,
        marks: [70, 82, 75, 68, 90]
    },

    {
        id: 2,
        name: "Danish",
        age: 22,
        department: "SE",
        semester: 6,
        marks: [55, 62, 48, 70, 65]
    },

    {
        id: 3,
        name: "Bilal",
        age: 20,
        department: "IT",
        semester: 5,
        marks: [88, 92, 85, 90, 95]
    },

    {
        id: 4,
        name: "Ahmad",
        age: 23,
        department: "CS",
        semester: 8,
        marks: [45, 58, 62, 50, 55]
    },

    {
        id: 5,
        name: "Hassan",
        age: 21,
        department: "SE",
        semester: 7,
        marks: [76, 84, 79, 88, 81]
    },

    {
        id: 6,
        name: "Usman",
        age: 24,
        department: "IT",
        semester: 8,
        marks: [91, 87, 93, 89, 96]
    },

    {
        id: 7,
        name: "Hamza",
        age: 20,
        department: "CS",
        semester: 6,
        marks: [6, 0, 0, 0, 0]
    },

    {
        id: 8,
        name: "Saad",
        age: 22,
        department: "SE",
        semester: 8,
        marks: [82, 78, 85, 80, 87]
    },

    {
        id: 9,
        name: "Zain",
        age: 23,
        department: "IT",
        semester: 7,
        marks: [58, 64, 72, 55, 68]
    },

    {
        id: 10,
        name: "Talha",
        age: 21,
        department: "CS",
        semester: 5,
        marks: [95, 91, 89, 94, 97]
    }
];
students.forEach(student => {
    let totalMarks = student.marks.reduce((a, b) => a + b, 0);
    let average = totalMarks / student.marks.length;
    let grade;
    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else {
        grade = "F";
    }
    student.total = totalMarks;
    student.average = average;
    student.grade = grade;
});

let highestStudent = students.reduce((highest, student) => {
    return student.average > highest.average ? student : highest;
});
console.log(highestStudent);

let lowestStudent = students.reduce((lowest, student) => {
    return student.average < lowest.average ? student : lowest;
});
console.log(lowestStudent);

let classaverage = students.reduce((total, student) => {
    return total + student.average;
}, 0) / students.length;

let failedStudents = students.filter(student => {
    return student.marks.some(mark => mark < 60);
});

failedStudents.forEach(student => {
    console.log(student.name);
});
console.log("failed",failedStudents);


// console.log(students);