function startApp() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
}

function checkAge() {
  const name = document.getElementById("name").value;
  const birthYear = document.getElementById("birthYear").value;
  if (!name || !birthYear) {
    alert("please fill the fields");
    return;
  }
  const currentYear = 2026;
  const age = currentYear - birthYear;
  let message = "";
  if (age >= 18) {
    message = `good day ${name}, you are ${age} years old ,and you qualify to drive`;
  } else {
    message = `good day ${name}, you are ${age} years old, and you are too young to drive`;
  }
  document.getElementById("formScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");
  document.getElementById("message").innerText = message;
}
function restartApp() {
  document.getElementById("name").value = "";
  document.getElementById("birthYear").value = "";
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
}
