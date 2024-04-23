let login = document.getElementById("loginn");
let regiter = document.getElementById("register");
let old = document.getElementById("old")
login.onclick = function f() {

    login.style.visibility = "hidden",
        regiter.style.visibility = "hidden",
        old.style.visibility = "visible"
};