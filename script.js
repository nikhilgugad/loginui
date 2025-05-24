

function register(){
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    alert("Registered Successfully")

}

function login(){
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let myusername = localStorage.getItem("username");
    let mypassword = localStorage.getItem("password");

    if (myusername == username.value & mypassword == password.value) {
        alert("Login Successful")
        window.location = "home.html"
    } else {
        alert("login unsuccessful, Please enter correct username and password")
    }
}

function logout(){
    alert("Logout Successful !")
    window.location = "login.html"
}

function changePage(){
    window.location = "change.html"
}

function change(){
    let password = document.querySelector("#password");
    localStorage.setItem("password", password.value)
    alert('Password Change Successful')
    window.location = "login.html"
}