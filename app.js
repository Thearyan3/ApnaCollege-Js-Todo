let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let Clr = document.querySelector("#clear");
let lis = document.querySelector("ul");

lis.addEventListener("click", function (event) {
    if (event.target.nodeName === "I") {
        let listItem = event.target.parentElement;            
        listItem.remove();
    }
});

lis.addEventListener("click", function(event){
    if(event.target.nodeName === "SPAN"){
        let check = document.createElement("i");          // Create delete icon
        check.classList.add("fa-solid", "fa-check");

        let text = event.target.parentElement;               
        text.classList.add("line");

        let icon = text.querySelector('i');
        icon.style.color = "white";

        event.target.replaceWith(check);
        lis.append(text);
    }
});

//Eventlistener to handle creating list items when button is clicked
btn.addEventListener("click", function (event) {
    if(inp.value.trim() === ""){
        event.preventDefault();
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("item");

    let box = document.createElement("span");       // Create span for item                 
    box.classList.add("ele");                                  

    let del = document.createElement("i");          // Create delete icon
    del.classList.add("fa-solid", "fa-trash");

    item.insertAdjacentElement("afterbegin", box);
    item.appendChild(del);
    lis.append(item);
    inp.value = "";
});

// Eventlistener to handle creating list items when Enter key is pressed
inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if(inp.value.trim() === ""){
            event.preventDefault();
            return;
        }

        let item = document.createElement("li");
        item.innerText = inp.value;
        item.classList.add("item");

        let box = document.createElement("span");       // Create span for item                  
        box.classList.add("ele");                                   

        let del = document.createElement("i");          // Create delete icon
        del.classList.add("fa-solid", "fa-trash");

        item.insertAdjacentElement("afterbegin", box);
        item.appendChild(del);
        lis.append(item);
        inp.value = "";
    }
});

// Clear the list when the Clr button is clicked
Clr.addEventListener("click", function() {
    // Clear the entire list
           lis.innerHTML = "";                                            
});