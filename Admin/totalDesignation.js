let totalDesignation = document.getElementById("totalDesignation");
let desiBody = document.querySelector(".desiBody");
let tbody = document.querySelector("tbody");
let pagination = document.querySelector(".pagination")

// search
let searchButton = document.getElementById("searchButton")
let searchText = document.getElementById("searchText");

let url = "http://localhost:3000/travel";

window.addEventListener("load", ()=>{
    calcLen()
fetchingData(1);
})

let len = 0;

function calcLen(){
    fetch(`${url}`)
    .then((res)=> res.json())
    .then((data)=>{
        totalDesignation.innerText = data.length;
        len = data.length;
    })
}


function fetchingData(pageNumber){
    fetch(`${url}?_limit=5&_page=${pageNumber}`)
    .then((res)=>{
        let totalData = len;
        totalBtn = Math.ceil(totalData/5);
        pagination.innerHTML = "";
        for(let i=1; i<=totalBtn; i++)
        {
            pagination.append(getBtn(i));
        }
        return res.json()
    })
    .then((data)=>{
        console.group(data)
        appendData(data)
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






function appendData(data)
{
    desiBody.innerHTML = "";
    data.forEach(ele => {
        desiBody.append(getCard(ele["image"], ele["placeDescription"], ele["price"], ele["category"], ele["city"]))
    });
}

function getCard(image, placeDescription, price, category, city)
{
    let div = document.createElement("div");
    div.classList.add("card-body")
    // let tr = document.createElement("tr");
    
    // let td1 = document.createElement("td");
    let imgDiv = document.createElement("div")
    imgDiv.classList.add("image-div");

    let img = document.createElement("img");
    img.setAttribute("src", image);
    imgDiv.append(img);
    // td1.append(imgDiv)
    
    
    // let td2 = document.createElement("td");
    let paraDiv = document.createElement("div")
    paraDiv.classList.add("paraDiv");
    let para = document.createElement("p")
    para.classList.add("para-description");
    para.innerText = placeDescription;
    paraDiv.append(para)

    // td2.append(para);
    

    // let td3 = document.createElement("td");
    let cityHead = document.createElement("h2")
    cityHead.innerText = city;
    // td3.append(cityHead);

    
    // let td4 = document.createElement("td");
    let btn = document.createElement("buton")
    btn.classList.add("designationBtn");
    btn.innerText = "Remove";
    // td4.append(btn)

    let priceBtn = document.createElement("buton")
    priceBtn.classList.add("priceBtn");
    priceBtn.innerText = price;

    // tr.append(td1, td2, td3, td4);

    let editBtn = document.createElement("buton")
    editBtn.classList.add("editBtn");
    editBtn.innerText = "Edit Price";
    div.append(imgDiv, cityHead, btn, priceBtn, editBtn, paraDiv)

    return div;
}


searchButton.addEventListener("click", ()=>{
    let query = searchText.value;
    console.log(query)
    fetch(`${url}?q=${query}`)
    .then((res)=> res.json())
    .then((data)=>{
        // console.log(data, "QQQQ")
        appendData(data)
    })
})