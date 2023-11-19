let totalUser = document.getElementById("totalUser");
let tbody = document.querySelector("tbody");
let pagination = document.querySelector(".pagination")

let url = "https://mock-api-template-trn5.onrender.com/";



window.addEventListener("load", ()=>{
    calCulLen();
fetchingData(1);
})

let len = 0;

function calCulLen(){
    fetch(`${url}register`)
    .then((res) => res.json())
    .then((data)=>{
        // console.log(data);
        totalUser.innerText = data.length;
        len = data.length;
        console.log("len", len)
    })

}

function fetchingData(pageNumber){
    fetch(`${url}register?_limit=7&_page=${pageNumber}`)
    .then((res) => {
        let totalData = len;
        totalBtn = Math.ceil(totalData/7);
        // console.log("tot", totalData, totalBtn);
        pagination.innerHTML = "";
        for(let i=1; i<=totalBtn; i++)
        {
            pagination.append(getBtn(i));
        }
        return res.json()
    })
    .then((data)=>{
        console.log(data, pageNumber, "+++");
        appendData(data, pageNumber);
        // calCulLen();
    })
}

function getBtn(i){
    let btn = document.createElement("button");
    btn.classList.add("paginationBtn");
    btn.innerText = i;
    btn.setAttribute("data-id", i);
    
    btn.addEventListener("click", (e)=>{
        // console.log(e.target.dataset.id);
        fetchingData(e.target.dataset.id)
    })
    return btn;
}

function appendData(data, pageNumber){
    tbody.innerHTML = "";

    data.forEach(ele => {
        tbody.append(getCard(ele["id"], ele["username"],ele["email"], pageNumber))
        
    });
}

function getCard(id, username, email, pageNumber)
{
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let p1 = document.createElement("p")
    p1.innerText = id;
    td1.append(p1);

    let td2 = document.createElement("td");
    let p2 = document.createElement("p")
    p2.innerText = username;
    td2.append(p2);

    let td3 = document.createElement("td");
    let p3 = document.createElement("p")
    p3.innerText = email;
    td3.append(p3);

    let td4 = document.createElement("td");
    let btn = document.createElement("button")
    btn.classList.add("removeBtn")
    btn.innerText = "Remove"
    td4.append(btn);

    btn.addEventListener("click", ()=>{
        removeUser(id, pageNumber);
    })


    tr.append(td1, td2, td3, td4)

    return tr


}


function removeUser(id, pageNumber){
    fetch(`${url}register/${id}`, {
        method: "DELETE",
    })
    .then((res)=> res.json())
    .then((data)=>{
        alert("User Removed Successfully")
        

    })
}
