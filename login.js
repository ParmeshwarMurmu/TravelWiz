let userData = JSON.parse(localStorage.getItem("users")) || [];
let userss = JSON.parse(localStorage.getItem("use")) || [];

let formData = document.querySelector("form")
let email = document.getElementById("email")
let password = document.getElementById("password")
const url = "https://mock-api-template-trn5.onrender.com/register";

formData.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
    checkUser(email.value, password.value)
    // Additional logic for form submission can be added here
});

function checkUser(userEmail, userPassword) {

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            chekLogin(data, userEmail, userPassword)
        })
        .catch((err) => {
            console.log(err);
        });
}
// "password": "1234",
// "email": "murmuparmeshwar05@gmail.com",
function chekLogin(data, userEmail, userPassword) {
    let flag = false;
    data.forEach(element => {
        if (element.email === userEmail && element.password === userPassword) {
            localStorage.setItem("username", element.username);
            flag = true;
            
        }
        
    });


    if(flag == true){
        alert("Logged in Successfully");
        window.location.href = "index.html";
    }
    else{
        alert("Wromg Crendentials");

    }

}

// let form = document.querySelector('form')
// let submitBtn = document.getElementById("submitBtn");
// let userData = JSON.parse(localStorage.getItem("users")) || [];
// let userss = JSON.parse(localStorage.getItem("use")) || [];
// let email = document.getElementById("email")
// let pass = document.getElementById("password")

// let flag = false;

// // form.addEventListener('click', function(e){
// //   e.preventDefault()
// //   console.log(email.value, pass.value);

// // })

// submitBtn.addEventListener("click", function(e){
//   // console.log();
//   console.log(email.value, pass.value);
// })



// // form.addEventListener("click", function(e) {
// //   e.preventDefault();
// //   console.log("HELLo");
// //   const url = "https://mock-api-template-trn5.onrender.com/register";
// //   const email = form.email.value;
// //   const psw = form.password.value;

// //   fetch(url)
// //     .then((res) => {
// //       console.log(res);
// //       return res.json();
// //     })
// //     .then((data) => {
// //       console.log(data);
// //       check(data, email, psw);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // });



// // function check(data, email, psw) {
// //   let flag = true;
// //   data.forEach((user) => {
//     // uselogedin(
//     //   user.username,
//     //   user.email,
//     //   user.password,
//     //   user.id,
//     //   email,
//     //   psw
//     // );
//   //   if (user.email === email && user.password === psw) {
//   //     alert("Logged in Successfully");
//   //     localStorage.setItem("username", user.username);

//   //     window.location.href = "index.html";
//   //   } else {
//   //     flag = false;
//   //   }
//   // });
//   // if (flag === true) {
//   //   alert("Wrong Credentials");
//   // }
// // }


// // function uselogedin(username, useremail, userpassword, userid, email, psw) {
// //   if (useremail === email && userpassword === psw) {
// //     alert("Logged in Successfully");
// //     localStorage.setItem("username", username);
// //     window.href.location = "index.html";
// //   } else {
// //     alert("Wrong Credentials");
// //   }
// // }


