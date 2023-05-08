let totalDesignation = document.getElementById("totalDesignation");
let desiBody = document.querySelector(".desiBody");
let tbody = document.querySelector("tbody");
let pagination = document.querySelector(".pagination")

// search
let searchButton = document.getElementById("searchButton")
let searchText = document.getElementById("searchText");

let updatePriceDiv = document.getElementsByClassName("updatePriceDiv");
let editPriceInput = document.getElementById("editPriceInput");
let updateBtn = document.getElementById("updateBtn");



let url = "http://localhost:3000/travel";

// window.addEventListener("load", ()=>{
//     calcLen()
// fetchingData(1);
// })
calcLen()
fetchingData();

// let len = 0;

function calcLen(){
    fetch(`${url}`)
    .then((res)=>{
        // len = res.headers.get("X-Total-Count")
        return res.json();
    })
    .then((data)=>{
        totalDesignation.innerText = data.length;
        // len = data.length;
    })
}


function fetchingData(pageNumber){
    fetch(`${url}?_limit=5&_page=${pageNumber}`)
    .then((res)=>{
        console.log(res.headers.get("X-Total-Count"))
        let totalData = res.headers.get("X-Total-Count")
        totalBtn = Math.ceil(totalData/5);
        pagination.innerHTML = "";
        for(let i=1; i<=totalBtn; i++)
        {
            pagination.append(getBtn(i));
        }
        return res.json()
    })
    .then((data)=>{
        // console.group(data)
        appendData(data, pageNumber)
        
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






function appendData(data, pageNumber)
{
    console.log(data, "+++")
    // data.rev
    // console.log(data)
    desiBody.innerHTML = "";
    data.forEach(ele => {
        // console.log(ele);
        desiBody.append(getCard(ele["image"], ele["placeDescription"], ele["price"], ele["category"], ele["city"], ele["id"], pageNumber))
    });
}

function getCard(image, placeDescription, price, category, city, id, pageNumber)
{
    let div = document.createElement("div");
    div.classList.add("card-body")

    let imgDiv = document.createElement("div")
    imgDiv.classList.add("image-div");

    let img = document.createElement("img");
    img.setAttribute("src", image);
    imgDiv.append(img);

    
    

    let paraDiv = document.createElement("div")
    paraDiv.classList.add("paraDiv");
    let para = document.createElement("p")
    para.classList.add("para-description");
    para.innerText = placeDescription;
    paraDiv.append(para)


    


    let cityHead = document.createElement("h2")
    cityHead.innerText = city;


    

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

let cardBody = document.getElementById("card-body");
cardBody.classList.add("invisible1");


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


// removing

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
