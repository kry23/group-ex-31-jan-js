function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let students = [{name:'Koray'},{name:'Rasam'},{name:'Hakan'},{name:'Adrian'},{name:'Gabriel'}]


function join(students) {
     students.map((el) => {
       el.academy = "Develhope";

     });
      return students
    }

// let studentsArr = join(students);
// console.log(studentsArr);

function exam(students){
  students.map(el=>{
    el.grade = getRandomNumber(1,10)
  })
  return students;
}
function year(students){
  students.map(el=>{
    el.year = getRandomNumber(1,3)
  })
  return students;
}

function graduate(students){
 return students.filter((el)=> el.grade >= 6)
}

function studentLevels(stArr) {
  return stArr.map((st) => {
    let str = st.name + " " + "grade " + st.grade + " ";
    if (st.grade < 6) {
      return str + "Failed";
    } else if (st.grade >= 6 && st.grade < 7) {
      return str + "Average";
    } else if (st.grade >= 7 && st.grade < 9) {
      return str + "Above Average";
    } else if (st.grade >= 9 && st.grade <= 10) {
      return str + "Great";
    }
  });
}

function failedStudents(stArr) {
  return stArr.filter((el)=> el.grade<5)
}
let studentsArr = []
studentsArr = join(students)
studentsArr = exam(students)
studentsArr = graduate(students)
studentsArr =   year(students)
 console.log(studentsArr);


//  console.log(studentLevels(students))
// console.log(failedStudents(students));