// QUIZ
// Add Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
// Define Variables
let in1 = document.getElementById("in-1");
let in2 = document.getElementById("in-2");
let in3 = document.getElementById("in-3");
let in4 = document.getElementById("in-4");
let out1 = document.getElementById("out");
let out2 = document.getElementById("out-2");
let out3 = document.getElementById("out-3");
let out4 = document.getElementById("out-4");
let total = document.getElementById("tot");
// If Statements
function btnClicked() {
  i = 0;
  if (in1.value.toLowerCase() === "july") {
    out1.innerHTML = "CORRECT";
    out1.style.color = "green";
    i++;
    in1.style.borderColor = "lime";
  } else {
    out1.innerHTML = "INCORRECT";
    out1.style.color = "red";
    in1.style.borderColor = "red";
  }
  if (in2.value.toLowerCase() === "minecraft") {
    out2.innerHTML = "CORRECT";
    out2.style.color = "green";
    i++;
    in2.style.borderColor = "lime";
  } else {
    out2.innerHTML = "INCORRECT";
    out2.style.color = "red";
    in2.style.borderColor = "red";
  }
  if (
    in3.value.toLowerCase() === "soccer" ||
    in3.value.toLowerCase() === "football"
  ) {
    out3.innerHTML = "CORRECT";
    out3.style.color = "green";
    i++;
    in3.style.borderColor = "lime";
  } else {
    out3.innerHTML = "INCORRECT";
    out3.style.color = "red";
    in3.style.borderColor = "red";
  }
  if (in4.value.toLowerCase() === "chicken") {
    out4.innerHTML = "CORRECT";
    out4.style.color = "green";
    i++;
    in4.style.borderColor = "lime";
  } else {
    out4.innerHTML = "INCORRECT";
    out4.style.color = "red";
    in4.style.borderColor = "red";
  }
  let percent = (i * 100) / 4;

  total.innerHTML = `${i}/4 or ${percent}%`;
  if (i < 2) {
    document.getElementById("enc").innerHTML = "It's okay. Try Again!";
  } else {
    document.getElementById("enc").innerHTML = "Great Job";
  }
}
