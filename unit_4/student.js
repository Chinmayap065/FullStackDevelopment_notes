let students=[];
function addStudent(id,name,marks){
    const student={id,name,marks};
    students.push(student);
}
function getAllStudents(){
    return students;
}
module.exports={addStudent,getAllStudents};