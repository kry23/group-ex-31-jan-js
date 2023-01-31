function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let studentsArr = [
  { name: "Adrian" },
  { name: "Julien" },
  { name: "Maria" },
  { name: "John" },
  { name: "Jack" },
];

class Student {
  constructor(name) {
    this.name = name;
  }
}

let st = [
  new Student("Johnny"),
  new Student("Maria"),
  new Student("John"),
  new Student("Jack"),
];

function whatAcademy() {
  console.log(this);
}

let academyList = ["Develhope", "Microsoft", "Oracle", "MIT"];

let choice = prompt();

join(st, academyList);
console.log(st);
// st[0].whatAcademy();

function join(students, academies) {
  //   students.map((el) => {
  //     el.academy = "Develhope";
  //     el.whatAcademy = whatAcademy.bind(el);
  //   });

  for (let i = 0; i < students.length; i++) {
    // if (i % 2 == 0) {
    //   students[i].academy = "Develhope";
    // } else {
    //   students[i].academy = "Microsoft";
    // }

    students[i].academy = academies[getRandomNumber(0, academies.length - 1)];
  }
}

function exam(students) {
  students.forEach((el) => {
    el["grade"] = getRandomNumber(1, 10);
  });
}

function graduate(students) {
  let result = [];
  result = students.filter((st) => {
    if (st.grade > 5) {
      return st;
    }
  });
  return result;
}

function year(students) {
  students.forEach((el) => {
    el["year"] = getRandomNumber(1, 3);
  });
}

// returns ["Failed", "Average", "Above Average", "Great"]
function studentLevels(students) {
  let result = [];
  for (let i = 0; i < students.length; i++) {
    const st = students[i];

    switch (st.grade) {
      case 6:
        result.push("Average");
        break;
      case 7:
        result.push("Above Average");
        break;
      case 8:
        result.push("Above Average");
        break;
      case 9:
        result.push("Great");
        break;
      case 10:
        result.push("Great");
        break;

      default:
        result.push("Failed");
        break;
    }
  }
  return result;
}

function studentLevels2(students) {
  return students.map((st) => {
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

function failedStudents(students) {
  let result = [];
  result = students.filter((st) => {
    if (st.grade < 5) {
      return st;
    }
  });
  return result;
}

let graduatedStudents = [];
let studentLevelsArr;
let failedStudentsArr;

// join(studentsArr);
// exam(studentsArr);
// year(studentsArr);
// graduatedStudents = graduate(studentsArr);
// studentLevelsArr = studentLevels(studentsArr);
// studentLevelsArr2 = studentLevels2(studentsArr);
// failedStudentsArr = failedStudents(studentsArr);

// console.log(studentsArr);
// console.log(graduatedStudents);
// console.log(studentLevelsArr);
// console.log(studentLevelsArr2);
// console.log(failedStudentsArr);
