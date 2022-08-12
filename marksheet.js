// let formSubmitHandeler = (event) => {
//   event.preventDefault();
//   console.log(event);

// };
function logSubmit(event) {
  event.preventDefault();
  console.log(event.target[1].value);
  let totalMarks = 500;
  let Arr = event.target;

  //   for (var i in event.target) {

  //   }
  let totalMarksObtain =  totalMarksObtainFunc(Arr);
  console.log(totalMarksObtain, "after obtain function");

  let perc = totalMarksObtain / totalMarks;
  perc *= 100;
  console.log(perc);

  let grade;

  if (perc <= 100 && perc >= 80) {
    grade = "A+";
  } else if (perc <= 80 && perc >= 70) {
    grade = "A";
  } else if (perc <= 70 && perc >= 50) {
    grade = "B";
  } else if (perc <= 50 && perc >= 40) {
    grade = "C";
  } else if (perc <= 40 && perc >= 33) {
    grade = "D";
  } else if (perc < 33) {
    grade = "F";
    alert("beta Aap Fail HOGYE!");
  } else {
    grade = "Shaba Puttar Chutti KR!";
  }

  //   if (perc < 33) {
  //     grade = "F";
  //   } else if (perc <= 40) {
  //     grade = "D";
  //   } else if (perc <= 50) {
  //     grade = "C";
  //   } else if (perc <= 70) {
  //     grade = "B";
  //   } else if (perc <= 80) {
  //     grade = "A";
  //   } else if (perc <= 100) {
  //     grade = "A+";
  //   } else {
  //     grade = "Shaba Puttar Chutti KR!";
  //   }

  console.log("type of input from subj " + typeof event.target[1].value);
  let form = document.getElementById("form_parent");
  form.style.display = "none";

  let nDiv = document.createElement("div");
  let nHead = document.createElement("h1");

  //   nDiv.appendChild(nHead);
  var ans = document.getElementById("answer");

  let logPercAndGrade = `obtained marks${totalMarksObtain} percentage is ${perc} and grade is ${grade}`;
  console.log(logPercAndGrade);
  ans.innerHTML =
    "the Grade for student " + event.target[0].value + " is " + grade + ".";
}
let totalMarksObtainFunc = (Array) => {
    let totalMarksObtain  = 0;
  for (let i = 1; i <= 5; i++) {
    if (
      Array[i].value != null &&
      Array[i].value <= 100 &&
      Array[i].value != ""
    ) {
      console.log(Number(Array[i].value));
      console.log(totalMarksObtain + "totalMarksObtain before add");
      totalMarksObtain += Number(Array[i].value);

      console.log(totalMarksObtain, "after add");
    } else {
      alert(
        "something wrong with the Marks entered ,Marks should be less than 100 and not null "
      );
      break;
    }
  }

  return totalMarksObtain;
};

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);
