const student=require('./student');
const marks=require('./marks');
student.addStudent(1,'Alice',[90,70,60]);
student.addStudent(1,'Bob',[80,78,65]);

const students=student.getAllStudents();

console.log('---------Student Report ------------');
students.forEach(s=>{
    const total=marks.caltol(s.marks);
    const grade=marks.calGrade(total);
    console.log(`Id:${s.id},Name:${s.name},Total:${total},grade:${grade}`);
})