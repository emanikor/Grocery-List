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
           <i onClick="editList(this)" class="fas fa-edit"></i>
           <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
              </div>
         
          </div>`;

          inputField.value = "";
}

// delete

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editList =(e) =>{
   inputField.value =e.parentElement.previousElementSibling.innerHTML;
   e.parentElement.parentElement.remove();
  };

