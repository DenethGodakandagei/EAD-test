const students = [
    {id:1,name: "Kamal",marks:75},
    {id:2, name: "Nimal",marks:85},
    {id:3,name: "Saman", marks:95},
    {id:4, name: "Amal", marks:80 },
    {id:5, name: "Kumara", marks:90}
];

function getPassedStudents(students) {
    return students.filter(student => student.marks >= 50);
}
function calculateAverage(students){
    if(students.length === 0) return 0;

    const total = students.reduce((sum, student) => sum + student.marks, 0);
    return total / students.length;
 
}
console.log("Passed Students:", getPassedStudents(students));
console.log(getPassedStudents(students));

console.log("Average Marks:", calculateAverage(students));
