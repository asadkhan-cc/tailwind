// let formSubmitHandeler = (event) => {
//   event.preventDefault();
//   console.log(event);

// };
function logSubmit(event) {
  event.preventDefault();
  console.log(event.target[1].value);
  let totalMarks = 500;
  let Arr = event.target;
  // Validator(Arr);
  if (Validator(Arr)) {
    let totalMarksObtain = totalMarksObtainFunc(Arr);
    console.log(totalMarksObtain, "after obtain function");

    let perc = perc_calc(totalMarksObtain, totalMarks);

    // for maths---------------
    let mathPerc = perc_calc(Arr[1].value);
    document.getElementById("math_perc").innerHTML = mathPerc;
    let mathGrade = gradeChecker(mathPerc);
    document.getElementById("math_grade").innerHTML = mathGrade[0];
    document.getElementById("math_com").innerHTML = mathGrade[1];

    if (mathGrade[0] == "F") {
      document.getElementById("math_grade").style.color = "red";
      document.getElementById("math_grade").style.fontWeight = "900";
    }

    // for chem---------------
    let chemPerc = perc_calc(Arr[2].value);
    document.getElementById("chem_perc").innerHTML = chemPerc;
    let chemGrade = gradeChecker(chemPerc);
    document.getElementById("chem_grade").innerHTML = chemGrade[0];
    document.getElementById("chem_com").innerHTML = chemGrade[1];

    if (chemGrade[0] == "F") {
      document.getElementById("chem_grade").style.color = "red";
      document.getElementById("chem_grade").style.fontWeight = "900";
    }
    // for phy---------------
    let phyPerc = perc_calc(Arr[3].value);
    document.getElementById("phy_perc").innerHTML = phyPerc;
    let phyGrade = gradeChecker(phyPerc);
    document.getElementById("phy_grade").innerHTML = phyGrade[0];
    document.getElementById("phy_com").innerHTML = phyGrade[1];
    if (phyGrade[0] == "F") {
      document.getElementById("phy_grade").style.color = "red";
      document.getElementById("phy_grade").style.fontWeight = "900";
    }
    // for eng---------------
    let engPerc = perc_calc(Arr[4].value);
    document.getElementById("eng_perc").innerHTML = engPerc;
    let engGrade = gradeChecker(engPerc);
    document.getElementById("eng_grade").innerHTML = engGrade[0];
    document.getElementById("eng_com").innerHTML = engGrade[1];

    if (engGrade[0] == "F") {
      document.getElementById("eng_grade").style.color = "red";
      document.getElementById("eng_grade").style.fontWeight = "900";
    }
    // for Pst---------------

    let pstPerc = perc_calc(Arr[5].value);
    document.getElementById("pst_perc").innerHTML = pstPerc;
    let pstGrade = gradeChecker(pstPerc);
    document.getElementById("pst_grade").innerHTML = pstGrade[0];
    document.getElementById("pst_com").innerHTML = pstGrade[1];
    if (pstGrade[0] == "F") {
      document.getElementById("pst_grade").style.color = "red";
      document.getElementById("pst_grade").style.fontWeight = "900";
    }

    // ===========================overall grade before refactoring======================
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
    } else {
      grade = "Shaba Puttar Chutti KR!";
    }
    document.getElementById("totalObtainedMarks").innerHTML = totalMarksObtain;
    document.getElementById("T_perc").innerHTML = perc;
    document.getElementById("F_grade").innerHTML = grade;
    document.querySelector("#candidateName").innerHTML=Arr[0].value 



    // document.getElementById("cad_image").src = URL.createObjectURL(event.target[6].files);
    // console.log(event.target[6].fileName);
    // console.log(event.target[6].value);


    document.getElementById("math_omarks").innerHTML = event.target[1].value;
    document.getElementById("chem_omarks").innerHTML = event.target[2].value;
    document.getElementById("phy_omarks").innerHTML = event.target[3].value;
    document.getElementById("eng_omarks").innerHTML = event.target[4].value;
    document.getElementById("pst_omarks").innerHTML = event.target[5].value;

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

    //   let nDiv = document.createElement("div");
    //   let nHead = document.createElement("h1");

    //   nDiv.appendChild(nHead);
    var ans = document.getElementById("answer");

    let logPercAndGrade = `obtained marks${totalMarksObtain} percentage is ${perc} and grade is ${grade}`;
    console.log(logPercAndGrade);
    // ans.innerHTML =
    //   "the Grade for student " + event.target[0].value + " is " + grade + ".";

    bAns.style.display = "";
  }
}
let totalMarksObtainFunc = (Array) => {
  let totalMarksObtain = 0;
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

let Validator = (Array) => {
  if (Array[0].value == "") {
    alert("addstudent name");
    return;
  }
  for (let i = 1; i <= 5; i++) {
    if (Array[i].value == "") {
      alert("add marks in " + Array[i].name);
      return;
    } else if (Number(Array[i].value > 100)) {
      alert("Marks should be less than 100");
      return;
    }
  }
  return true;
};

const form = document.getElementById("form");
form.addEventListener("submit", logSubmit);
let bAns = document.getElementById("answer");
bAns.style.display = "none";

document.getElementById("candidate_name_inp_text").style.display = "none";

// resolved -------------------------------------------------------------------

let cadInpSubmitHandler = (e) => {
  // console.log(e);
  // alert ("something")
  if (e.target.value.length == 0) {
    document.getElementById("candidate_name_inp_text").style.display = "";
    document.getElementById("candidate_name_inp").style.border =
      "2px solid red";
  } else {
    document.getElementById("candidate_name_inp").style.border =
      "2px solid blue";
    document.getElementById("candidate_name_inp_text").style.display = "none";
  }
};

const cadinp = document.getElementById("candidate_name_inp");
cadinp.addEventListener("focusout", cadInpSubmitHandler);

//error resolver  here-------------------------------------------------------------------

let perc_calc = (tob, tm = 100) => {
  let percent = tob / tm;
  percent *= 100;
  console.log(percent);
  return percent;
};

let gradeChecker = (perc) => {
  let grade = "";
  let comment=""
  if (perc <= 100 && perc >= 80) {
    grade = "A+";
    comment="Excellent"
  } else if (perc <= 80 && perc >= 70) {
    grade = "A";
    comment="Very Good"
  } else if (perc <= 70 && perc >= 50) {
    grade = "B";
    comment="Good"

  } else if (perc <= 50 && perc >= 40) {
    grade = "C";
    comment="Average"

  } else if (perc <= 40 && perc >= 33) {
    grade = "D";
    comment="Below average"
    
  } else if (perc < 33) {
    grade = "F";
    comment="Poor Performance"

  } else {
    grade = "Shaba Puttar Chutti KR!";
  }
  let gnc = [grade,comment]
  return gnc;
};


// onchange="previewFile()"
 document.getElementById('img_tag_id').addEventListener("change",previewFile)

function previewFile() {
  var preview = document.getElementById('studentImage');
  var file    = document.querySelector('#img_tag_id').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
