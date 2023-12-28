let emails = JSON.parse(localStorage.getItem("userEmailsStorage")),
  login = {
    userName: "",
    userEmail: "",
    password: "",
  },
  logOut,
  logInVar,
  logInDis,
  singUpVar,
  singUpDis;
regUserName = /^[A-Z]{3,9}$/i,
  regUserEmail = /^\w{3,9}(@gmail.com)$/,
  regPassword = /^(\w){8,}$/;
function displayLogin() {
  document.getElementById("loginForm").innerHTML = `<div class="container ">
      <div id="person" class="m-auto d-flex align-items-center justify-content-center "><i
              class="fa-solid fa-user-large fa-4x"></i></div>
      <h1>Login</h1>

      <div>
          <div class="d-flex align-items-center "> <i class="fa-solid fa-envelope me-3"></i> <input type="text"
                  id="userEmail" placeholder="userEmail">
          </div>
          <P class="text-danger d-none m-0 " id="emailError"></P>
          <div class="d-flex align-items-center mb-0"> <i class="fa-solid fa-lock me-3"></i> <input type="password"
                  id="password" placeholder="Password">
          </div>
          <P class="text-danger d-none m-0" id="passwordError"></P>
           <button id="logInBtn" class="mb-3" >LOGIN</button>
          <button id="SignUpBtndisplay"> SING UP</button>
      </div>
  </div>`;
  logInVar = document.getElementById("logInBtn");
  singUpDis = document.getElementById("SignUpBtndisplay");
  singUpDis.addEventListener("click", displaySingup);
  logInVar.addEventListener("click", logInFun);
}
function displaySingup() {
  document.getElementById("loginForm").innerHTML = ` <div class="container ">
      <div id="person" class="m-auto d-flex align-items-center justify-content-center "><i
              class="fa-solid fa-user-plus fa-4x"></i></div>
      <h1>Sing Up</h1>
      <div>
          <div class="d-flex align-items-center mb-0"><i class="fa-solid fa-user-large me-3"></i> <input type="text"
              id="userName" placeholder="userName">
      </div>
      <P class="text-danger d-block m-0" id="nameError"></P>
          <div class="d-flex align-items-center "> <i class="fa-solid fa-envelope me-3"></i> <input type="text"
                  id="userEmail" placeholder="userEmail">
          </div>
          <P class="text-danger d-block m-0 " id="emailError"></P>
          <div class="d-flex align-items-center mb-0"> <i class="fa-solid fa-lock me-3"></i> <input type="password"
                  id="password" placeholder="Password">
          </div>
          <P class="text-danger d-block m-0" id="passwordError"></P>
          <button id="signUpBtn" class="mb-3"> SING UP</button>
           <button id="logInBtndisplay" >LOGIN</button>
          
      </div>
  </div>`;
  singUpVar = document.getElementById("signUpBtn");
  logInDis = document.getElementById("logInBtndisplay");
  logInDis.addEventListener("click", displayLogin);
  singUpVar.addEventListener("click", singUpFun);
}
displaySingup();
function displayWelcom(i) {
  var name = i;
  if (typeof name == "number") {
    name = emails[i].userName;
  }
  document.getElementById(
    "loginForm"
  ).innerHTML = `<div class="container mx-auto my-3 ">
            <h2 class="m-3"> Welcome ${i}</h2><button class ="w-75 m-auto" id="logOut" >LOGOUT</button>
        </div>
        `;
        logOut = document.getElementById("logOut");
        logOut.addEventListener("click", displayLogin);
}
function logInFun() {
  login.userEmail = document.getElementById("userEmail").value;
  login.password = document.getElementById("password").value;
  document
    .getElementById("passwordError")
    .classList.replace("d-block", "d-none");
  document.getElementById("emailError").classList.replace("d-block", "d-none");
  for (let i = 0; i < emails.length; i++) {
    if (
      login.userEmail == emails[i].userEmail &&
      login.password == emails[i].password
    ) {
      displayWelcom(i);
      return;
    } else if (login.userEmail == "" && login.password == "") {
      document.getElementById("passwordError").innerText =
        "Password is required";
      document.getElementById("emailError").innerText = "Email is required";
      document
        .getElementById("passwordError")
        .classList.replace("d-none", "d-block");
      document
        .getElementById("emailError")
        .classList.replace("d-none", "d-block");
      return;
    } else if (login.userEmail == emails[i].userEmail && login.password == "") {
      document
        .getElementById("passwordError")
        .classList.replace("d-none", "d-block");
      document.getElementById("passwordError").innerText =
        "Password is required";
      return;
    } else if (
      login.userEmail == emails[i].userEmail &&
      login.password != emails[i].password
    ) {
      document
        .getElementById("passwordError")
        .classList.replace("d-none", "d-block");
      document.getElementById("passwordError").innerText = "correct password";
      return;
    }
  }
  document
    .getElementById("passwordError")
    .classList.replace("d-none", "d-block");
  document.getElementById("passwordError").innerText =
    "This Email does not exist. Please sing up ";
}
function singUpFun() {
  document.getElementById("nameError").classList.replace("d-block", "d-none");
  document.getElementById("emailError").classList.replace("d-block", "d-none");
  document
    .getElementById("passwordError")
    .classList.replace("d-block", "d-none");
  login.userEmail = document.getElementById("userEmail").value;
  login.password = document.getElementById("password").value;
  login.userName = document.getElementById("userName").value;
  if (login.userName == "") {
    document.getElementById("nameError").innerText = "Name is required";
    document.getElementById("nameError").classList.replace("d-none", "d-block");
    return;
  } else if (!regUserName.test(login.userName)) {
    document.getElementById("nameError").innerText = "Name must be 3 - 9 char ";
    document.getElementById("nameError").classList.replace("d-none", "d-block");
    return;
  } else if (login.userEmail == "") {
    document.getElementById("emailError").innerText = "Email is required";
    document
      .getElementById("emailError")
      .classList.replace("d-none", "d-block");
    return;
  } else if (!regUserEmail.test(login.userEmail)) {
    document.getElementById("emailError").innerText = "Email must be in format";
    document
      .getElementById("emailError")
      .classList.replace("d-none", "d-block");
    return;
  } else if (login.password == "") {
    document.getElementById("passwordError").innerText = "Password is required";
    document
      .getElementById("passwordError")
      .classList.replace("d-none", "d-block");
    return;
  } else if (!regPassword.test(login.password)) {
    document.getElementById("passwordError").innerText =
      "password must be 3 - 10 char or num";
    document
      .getElementById("passwordError")
      .classList.replace("d-none", "d-block");
    return;
  }
  displayWelcom(`${login.userName}`);
  emails.push(login);
  console.log(emails);
  localStorage.setItem("userEmailsStorage", JSON.stringify(emails));
}
