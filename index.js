const form = document.getElementById("formLable");
const inputField = document.getElementById('input-field')
const GroceryBtn = document.getElementById('GrocBtn')
const Task = document.querySelector('.tasks')


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();

});


// prevent blank list
let formValidation = () =>{
    if (inputField.value === ""){
        inputField.innerHTML = "grocery list can't be blank";
        console.log("failure");

    } else{
        console.log("success");
        inputField.innerHTML ="";
        acceptData();
    }
};

let data = {}
 
let acceptData = () =>{
    data["text"] = inputField.value;
    console.log(data);
    createGroc();
}

// create elememnt
let createGroc = () =>{
    Task.innerHTML +=`
    <div class="item">
       <p>${data.text}</p>
           <div class="items-btn">
           <i class="fa-solid fa-pencil"></i>
           <i class="fa-solid fa-xmark"></i>
              </div>
         
          </div>`;

          inputField.value = "";
}
