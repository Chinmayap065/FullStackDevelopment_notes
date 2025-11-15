function caltol(marks){
    return marks.reduce((sum,marks)=>sum+marks,0);
}
function calGrade(total){
    const average=total/3;
    if(average>=90) return 'A+';
    else if(average>=80) return 'A';
    else if(average>=70) return 'B';
    else if(average>=60) return 'C';
}
module.exports={caltol,calGrade}