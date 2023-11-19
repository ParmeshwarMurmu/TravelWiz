let totalDesignation = document.getElementById("totalDesignation");
let desiBody = document.querySelector(".desiBody");
let tbody = document.querySelector("tbody");
let pagination = document.querySelector(".pagination")

let addDesignationSection = document.querySelector(".addDesignationSection")
let addDesignationBtn = document.querySelector("#addDesignationBtn")

// search
let searchButton = document.getElementById("searchButton")
let searchText = document.getElementById("searchText");

// Adding Designation Data
let imageUrl1 = document.getElementById("imageUrl1")
let description1 = document.getElementById("description1")
let imageUrl2 = document.getElementById("imageUrl2")
let imageUrl3 = document.getElementById("imageUrl3")
let imageUrl4 = document.getElementById("imageUrl4")
let imageUrl5 = document.getElementById("imageUrl5")
let city = document.getElementById("city")
let continent = document.getElementById("continent")
let country = document.getElementById("country")
let description2 = document.getElementById("description2")
let description3 = document.getElementById("description3")
let category = document.getElementById("category")
let price = document.getElementById("price")
let submit= document.getElementById("submit");

let url = "https://mock-api-template-trn5.onrender.com/travel";



// window.addEventListener("load", ()=>{
// calcLen()
// fetchingData(1);
// })

calcLen()
fetchingData();

// let len = 0;

function calcLen(){
    fetch(`${url}?title=json-server&category=InterNational`)
    .then((res)=> res.json())
    .then((data)=>{
        totalDesignation.innerText = data.length;
        // len = data.length;
    })

}



function fetchingData(pageNumber){
    fetch(`${url}?_limit=5&_page=${pageNumber}?title=json-server&category=InterNational`)  //?_limit=6&_page=${pageNumber}`
    .then((res)=>{
        let totalData = res.headers.get("X-Total-Count")
        console.log(totalData, "&&", res.headers.get("X-Total-Count"))
        totalBtn = Math.ceil(totalData/5);
        pagination.innerHTML = "";
        for(let i=1; i<=totalBtn; i++)
        {
            pagination.append(getBtn(i));
        }
        return res.json()
    })
    .then((data)=>{
        appendData(data, pageNumber)
        // calcLen(data)
        // internationalFilter(data)
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
        desiBody.append(getCard(ele["image"], ele["placeDescription"], ele["price"], ele["category"], ele["city"], ele["id"]))
    });

}

function getCard(image, placeDescription, price, category, city, id, pageNumber)
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
    
    
    let paraDiv = document.createElement("div")
    paraDiv.classList.add("paraDiv");
    let para = document.createElement("p")
    para.classList.add("para-description");
    para.innerText = placeDescription;
    paraDiv.append(para)
    

    // let td3 = document.createElement("td");
    let cityHead = document.createElement("h2")
    cityHead.innerText = city;
    // td3.append(cityHead);

    
    let removeBtn = document.createElement("buton")
    removeBtn.classList.add("designationBtn");
    removeBtn.innerText = "Remove";

    removeBtn.addEventListener("click", ()=>{
        removing(id, pageNumber)
        // console.log("remove")
    })

    let priceBtn = document.createElement("buton")
    priceBtn.classList.add("priceBtn");
    priceBtn.innerText = price;

    let editBtn = document.createElement("buton")
    editBtn.classList.add("editBtn");
    editBtn.innerText = "Edit Price";

    editBtn.addEventListener("click", ()=>{
        updatePriceDiv.style.display = "block"
        
    })

    let updatePriceDiv = document.createElement("div");
    updatePriceDiv.setAttribute("class", "updatePriceDiv")

    let editPriceInput = document.createElement("input");
    editPriceInput.setAttribute("type", "number")
    editPriceInput.setAttribute("placeholder", "Enter Price")
    editPriceInput.setAttribute("id", "editPriceInput");

    let updateBtn = document.createElement("buton")
    updateBtn.setAttribute("id", "updateBtn")
    updateBtn.innerText = "Update";

    updateBtn.addEventListener("click", ()=>{
        // editingPrice();
        // let price = editPriceInput.value
        if(editPriceInput.value == "")
        {
            alert("Enter a valid value");
        }
        else{
            let obj = {
                price: editPriceInput.value
                }
        
                fetch(`${url}/${id}`, {
                    method: "PATCH",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                })
                .then((res)=> res.json())
                .then((data)=>{
                    calcLen()
                    fetchingData(1);
                })

        }
        
    })

    updatePriceDiv.style.display = "none";

    updatePriceDiv.append(editPriceInput, updateBtn)

    div.append(imgDiv, cityHead, removeBtn, priceBtn, editBtn,updatePriceDiv, paraDiv)

    return div;
}

// addDesignationSection

addDesignationBtn.addEventListener("click", ()=>{
    addDesignationSection.style.display = "block";
    desiBody.style.display = "none";
    pagination.style.display = "none";
})


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


function removing(id, pageNumber){
    console.log("remove");
    console.log("page", pageNumber)

    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
    //    calcLen()
       fetchingData(pageNumber);
    })

}

submit.addEventListener("click", ()=>{
    addingDesignation();
})

function addingDesignation(){
    let priceV = +price.value
    let obj = {
        image: imageUrl1.value,
        placeDescription: description1.value,
        image2: imageUrl2.value,
        image3: imageUrl3.value,
        image4: imageUrl4.value,
        image5: imageUrl5.value,
        city: city.value,
        state: continent.value,
        country: country.value,
        description1: description2.value,
        description2: description3.value,
        category: category.value,
        price: priceV
    }
    // console.log(obj)

    fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log("++")
        console.log(data);
        alert("Designation Added Sucessfully")
        fetchingData();
    })

}