// QUIZ
// Add Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
// Define Variables
let answer1 = document.getElementById("in-1");
let answer2 = document.getElementById("in-2");
let answer3 = document.getElementById("in-3");
let answer4 = document.getElementById("in-4");
let out1 = document.getElementById("out");
let out2 = document.getElementById("out-2");
let out3 = document.getElementById("out-3");
let out4 = document.getElementById("out-4");
let grade = document.getElementById("final-grade");
// If Statements
function btnClicked() {
  i = 0;
  if (answer1.value.toLowerCase() === "july") {
    out1.innerHTML = "CORRECT";
    out1.style.color = "green";
    i++;
    answer1.style.borderColor = "lime";
  } else {
    out1.innerHTML = "INCORRECT";
    out1.style.color = "red";
    answer1.style.borderColor = "red";
  }
  if (answer2.value.toLowerCase() === "minecraft") {
    out2.innerHTML = "CORRECT";
    out2.style.color = "green";
    i++;
    answer2.style.borderColor = "lime";
  } else {
    out2.innerHTML = "INCORRECT";
    out2.style.color = "red";
    answer2.style.borderColor = "red";
  }
  if (
    answer3.value.toLowerCase() === "soccer" ||
    answer3.value.toLowerCase() === "football"
  ) {
    out3.innerHTML = "CORRECT";
    out3.style.color = "green";
    i++;
    answer3.style.borderColor = "lime";
  } else {
    out3.innerHTML = "INCORRECT";
    out3.style.color = "red";
    answer3.style.borderColor = "red";
  }
  if (answer4.value.toLowerCase() === "chicken") {
    out4.innerHTML = "CORRECT";
    out4.style.color = "green";
    i++;
    answer4.style.borderColor = "lime";
  } else {
    out4.innerHTML = "INCORRECT";
    out4.style.color = "red";
    answer4.style.borderColor = "red";
  }

  // Mark Quiz
  let percent = (i * 100) / 4;
  grade.innerHTML = `${i}/4 or ${percent}%`;

  // Encouragement and Celebration
  if (i < 2) {
    document.getElementById("comment").innerHTML = "It's okay. Try Again!";
  } else {
    document.getElementById("comment").innerHTML = "Great Job";
  }
}
