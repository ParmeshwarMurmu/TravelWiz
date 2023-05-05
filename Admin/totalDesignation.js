let totalDesignation = document.getElementById("totalDesignation");
let desiBody = document.querySelector(".desiBody");
let url = "http://localhost:3000/travel";

fetchingData();

function fetchingData(){
    fetch(`${url}?_limit=5&_page=1`)
    .then((res)=> res.json())
    .then((data)=>{
        console.group(data)
        appendData(data)
    })
}

function appendData(data)
{
    data.forEach(ele => {
        desiBody.append(getCard(ele["image"], ele["placeDescription"], ele["price"], ele["category"], ele["city"]))
    });
}

function getCard(image, placeDescription, price, category, city)
{
    // let div = document.createElement("div");
    // div.classList.add("card-body")
    let tr = document.createElement("tr");
    
    let td1 = document.createElement("td");
    let imgDiv = document.createElement("div")
    imgDiv.classList.add("image-div");

    let img = document.createElement("img");
    img.setAttribute("src", image);
    imgDiv.append(img);
    td1.append(imgDiv)
    
    
    let td2 = document.createElement("td");
    let para = document.createElement("p")
    para.classList.add("para-description");
    para.innerText = placeDescription;
    td2.append(para);
    

    let td3 = document.createElement("td");
    let cityHead = document.createElement("h2")
    cityHead.innerText = city;
    td3.append(cityHead);

    
    let td4 = document.createElement("td");
    let btn = document.createElement("buton")
    btn.classList.add("designationBtn");
    btn.innerText = "Remove";
    td4.append(btn)

    tr.append(td1, td2, td3, td4);

    return tr
}
