let exercise = document.getElementById("exercise");
let shower = document.getElementById("shower");
let breakfast = document.getElementById("breakfast");
let feed = document.getElementById("feed");
let study = document.getElementById("study");
let result = document.getElementById("result");
let done = document.getElementById("done");
let total = document.getElementById("total");
let ready1 = document.querySelector(".ready1");
let ready2 = document.querySelector(".ready2");
let ready3 = document.querySelector(".ready3");
let ready4 = document.querySelector(".ready4");
let ready5 = document.querySelector(".ready5");
let plus = document.querySelector(".plus");
let add = document.getElementById("add");
let create = document.querySelector(".extra-container")
let counter = 1;



exercise.addEventListener("click", ()=>{
    if(confirm(`You can't add this duty again
        Are you sure to delete this?`)){
        exercise.remove();
        done.innerText = Number(done.innerText)+1;
        ready1.style.backgroundColor = "red";
    } 
})
shower.addEventListener("click", ()=>{
    if(confirm(`You can't add this duty again
        Are you sure to delete this?`)){
        shower.remove();
        done.innerText = Number(done.innerText)+1;
        ready2.style.backgroundColor = "red";
    } 
})
breakfast.addEventListener("click", ()=>{
    if(confirm(`You can't add this duty again
        Are you sure to delete this?`)){
        breakfast.remove();
        done.innerText = Number(done.innerText)+1;
        ready3.style.backgroundColor = "red";
    } 
})
feed.addEventListener("click", ()=>{
    if(confirm(`You can't add this duty again
        Are you sure to delete this?`)){
        feed.remove();
        done.innerText = Number(done.innerText)+1;
        ready4.style.backgroundColor = "red";
    } 
})
study.addEventListener("click", ()=>{
    if(confirm(`You can't add this duty again
        Are you sure to delete this?`)){
        study.remove();
        done.innerText = Number(done.innerText)+1;
        ready5.style.backgroundColor = "red";
    } 
})

plus.addEventListener("click", ()=>{
    if (add.value.length < 3) {
        alert("min 3 letters!");
        return;
    }

    let newElement = document.createElement("label");
    newElement.setAttribute("class", "input");
    let newChild = document.createElement("input");
    newChild.setAttribute("type", "checkbox");
    newChild.setAttribute("id", `checkbox${counter}`);
    newElement.setAttribute("id", `input${counter}`);
    newElement.setAttribute("for", `checkbox${counter}`);
    counter++;
    create.appendChild(newElement);
    newElement.appendChild(newChild);
    newElement.innerHTML += add.value;
    total.innerText = Number(total.innerText)+1;
    add.value = "";
    console.log(newElement);
   
   
    if (counter==7) {
       add.remove();
       plus.remove();
   }

         if (total.innerText == 6) {
         let input1 = document.getElementById("input1");
         let checkbox1 = document.getElementById("checkbox1");
         checkbox1.addEventListener("click", ()=>{
         if(confirm(`You can't add this duty again
         Are you sure to delete this?`))
         checkbox1.remove();
         input1.style.backgroundColor = "red";
         done.innerText = Number(done.innerText)+1;
         checkbox1.style.backgroundColor = "red";
        })}

         if (total.innerText == 7) {
         let input2 = document.getElementById("input2");
         let checkbox2 = document.getElementById("checkbox2");
         checkbox2.addEventListener("click", ()=>{
         if(confirm(`You can't add this duty again
         Are you sure to delete this?`))
         checkbox2.remove();
         input2.style.backgroundColor = "red";
         done.innerText = Number(done.innerText)+1;
         checkbox2.style.backgroundColor = "red";
        })}

         if (total.innerText == 8) {
         let input3 = document.getElementById("input3");
         let checkbox3 = document.getElementById("checkbox3");
         checkbox3.addEventListener("click", ()=>{
         if(confirm(`You can't add this duty again
         Are you sure to delete this?`))
         checkbox3.remove();
         input3.style.backgroundColor = "red";
         done.innerText = Number(done.innerText)+1;
         checkbox3.style.backgroundColor = "red";
        })}

         if (total.innerText == 9) {
         let input4 = document.getElementById("input4");
         let checkbox4 = document.getElementById("checkbox4");
         checkbox4.addEventListener("click", ()=>{
         if(confirm(`You can't add this duty again
         Are you sure to delete this?`))
         checkbox4.remove();
         input4.style.backgroundColor = "red";
         done.innerText = Number(done.innerText)+1;
         checkbox4.style.backgroundColor = "red";
        })}

         if (total.innerText == 10) {
         let input5 = document.getElementById("input5");
         let checkbox5 = document.getElementById("checkbox5");
         checkbox5.addEventListener("click", ()=>{
         if(confirm(`You can't add this duty again
         Are you sure to delete this?`))
         checkbox5.remove();
         input5.style.backgroundColor = "red";
         done.innerText = Number(done.innerText)+1;
         checkbox5.style.backgroundColor = "red";
        })}

         if (total.innerText == 11) {
         let input6 = document.getElementById("input6");
         let checkbox6 = document.getElementById("checkbox6");
         checkbox6.addEventListener("click", ()=>{
         if(confirm(`You can't add this duty again
         Are you sure to delete this?`))
         checkbox6.remove();
         input6.style.backgroundColor = "red";
         done.innerText = Number(done.innerText)+1;
         checkbox6.style.backgroundColor = "red";
        })}

    })