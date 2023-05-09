let userName = document.getElementById("userName");
let userPasswprd = document.getElementById("userPasswprd");

let adminLoginBtn = document.querySelector(".adminLoginBtn");


adminLoginBtn.addEventListener("click", ()=>{
    alert("Login Successfull");
    window.location.href = "adminDashboard.html";
})