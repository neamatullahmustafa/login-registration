function loginfun() {
    var login = {
      username: username,
      password: password,
    };
    login.username = document.getElementById("username").value;
    login.password = document.getElementById("password").value;
    console.log(login);
    if (login.username === "admin" && login.password === "123") {
      document.getElementById("message").textContent = "Welcome";
    } else {
      document.getElementById("message").textContent = "Not registered";
    }
  }