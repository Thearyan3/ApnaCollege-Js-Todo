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
        let text = event.target.parentElement;
        text.classList.add("line");
    }
})

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let box = document.createElement("span");
    box.classList.add("ele");

    let del = document.createElement("i");
    del.classList.add("fa-solid", "fa-trash");

    item.insertAdjacentElement("afterbegin", box);
    item.appendChild(del);
    lis.append(item);
    inp.value = "";
});

inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let item = document.createElement("li");
        item.innerText = inp.value;

        let box = document.createElement("span");
        box.classList.add("ele");

        let del = document.createElement("i");
        del.classList.add("fa-solid", "fa-trash");

        item.insertAdjacentElement("afterbegin", box);
        item.appendChild(del);
        lis.append(item);
        inp.value = "";
    }
});

Clr.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        lis.remove();
    }
});