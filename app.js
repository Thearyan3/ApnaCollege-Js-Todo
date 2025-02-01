let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let Clr = document.querySelector("#clear");
let lis = document.querySelector("ul");
let listWrapper = document.querySelector("#listWrapper");
let bg = document.querySelector(".bg"); // The main div with class "bg"

// Event listener to handle removing list item (trash icon)
lis.addEventListener("click", function (event) {
    if (event.target.nodeName === "I") {
        let listItem = event.target.parentElement;
        listItem.remove();
        checkIfListIsEmpty();
    }
});

// Event listener to handle marking item as checked (check icon)
lis.addEventListener("click", function (event) {
    if (event.target.nodeName === "SPAN") {
        let check = document.createElement("i"); // Create check icon
        check.classList.add("fa-solid", "fa-check");

        let text = event.target.parentElement;
        text.classList.add("line");

        let icon = text.querySelector('i');
        icon.style.color = "white";

        event.target.replaceWith(check);
        lis.append(text);
    }
});

// Event listener to handle creating list items when button is clicked
btn.addEventListener("click", function (event) {
    if (inp.value.trim() === "") {
        event.preventDefault();
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("item");

    let box = document.createElement("span"); // Create span for item
    box.classList.add("ele");

    let del = document.createElement("i"); // Create delete icon
    del.classList.add("fa-solid", "fa-trash");

    item.insertAdjacentElement("afterbegin", box);
    item.appendChild(del);
    lis.append(item);
    inp.value = ""; // Clear the input after adding

    // Show the list and clear button if not empty
    if (lis.innerHTML !== "") {
        listWrapper.classList.remove("hidden");

        // Dynamically increase the height of the .bg div
        bg.style.height = "auto"; // Allow height to grow with content
    }
});

// Event listener to handle creating list items when Enter key is pressed
inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (inp.value.trim() === "") {
            event.preventDefault();
            return;
        }

        let item = document.createElement("li");
        item.innerText = inp.value;
        item.classList.add("item");

        let box = document.createElement("span"); // Create span for item
        box.classList.add("ele");

        let del = document.createElement("i"); // Create delete icon
        del.classList.add("fa-solid", "fa-trash");

        item.insertAdjacentElement("afterbegin", box);
        item.appendChild(del);
        lis.append(item);
        inp.value = ""; // Clear the input after adding

        // Show the list and clear button if not empty
        if (lis.innerHTML !== "") {
            listWrapper.classList.remove("hidden");

            // Dynamically increase the height of the .bg div
            bg.style.height = "auto"; // Allow height to grow with content
        }
    }
});

// Clear the list when the Clr button is clicked
Clr.addEventListener("click", function (event) {
    // Clear the entire list
    lis.innerHTML = "";

    // Hide the list and clear button after clearing the list
    listWrapper.classList.add("hidden");

    // Restore the original height of the .bg div
    bg.style.height = "auto"; // Set back to auto to fit the rest of the content
});

// Check if the list is empty and hide the list wrapper accordingly
function checkIfListIsEmpty() {
    if (lis.innerHTML === "") {
        listWrapper.classList.add("hidden");
        bg.style.height = "auto"; // Reset height if the list is empty
    }
}
