const showAlert = (message) => {
  const alert = document.getElementById("a1");
  alert.style.visibility = "visible";
  alert.style.backgroundColor = "red";
  alert.textContent = message;
  setTimeout(() => {
    alert.style.visibility = "hidden";
    alert.style.backgroundColor = "#0be49c";
    alert.textContent = "logged in successfully";
  }, 3000);
};

function validateForm() {
  const username = document.forms["myForm"]["username"].value;
  const pass = document.forms["myForm"]["password"].value;

  if (username == "") {
    showAlert("please enter your username");
    return false;
  }

  if (pass == "") {
    showAlert("please enter your password");
    return false;
  }

  if (username === "a" && pass === "b") {
    const alert = document.getElementById("a1");
    alert.style.visibility = "visible";
    setTimeout(() => {
      window.location.replace("../client/homePage.html");
    }, 3000);
    return false;
  } else {
    showAlert("incorrect username or password");
    return false;
  }
}
