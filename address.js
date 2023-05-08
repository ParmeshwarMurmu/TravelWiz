  
let cart = JSON.parse(localStorage.getItem("data"))

localStorage.setItem("cart",JSON.stringify(product_data));

var rcart=document.querySelector("#cartDetail")







document.querySelector("form").addEventListener("submit",addDetail)
var addArr=[];

 function addDetail(event){
    event.preventDefault();

    if(form.name.value==="" || form.mobile.value==="" || 
    form.code.value==="" || form.address.value==="" ){
        alert("Please fill all the blank fields");
    }

    else{
    var addObj={
                name:form.name.value,
                mobile:form.mobile.value,
                code:form.code.value,
                add:form.address.value,


                };

            addArr.push(addObj);
            console.log(addArr);

            localStorage.setItem("custAdd",JSON.stringify(addArr));
            window.location.href="payment.html";
    }
}

display(cart);


function sum() {
    let total = 0
    let data = JSON.parse(localStorage.getItem("data"))
    for(let i=0;i<data.length;i++){
        if(data[i].min){
            total+=data[i].min;
        }
    }
    // console.log(data)
    return total
}

var cartsum="Rs"+" "+(sum())

document.querySelector(".changing").innerText=cartsum;
document.querySelector(".changing1").innerText=cartsum;

 
















