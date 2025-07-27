let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Function to handle adding a new task
btn.addEventListener("click", function () {
    let taskText = inp.value.trim(); // Trim whitespace from input

    if (taskText === "") { // Prevent adding empty tasks
        alert("Please enter a task!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = taskText; // Use trimmed text

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete"); // Add the 'delete' class for styling

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = ""; // Clear the input field
    inp.focus(); // Keep focus on input for quick entry
});

// Event delegation for deleting tasks
ul.addEventListener("click", function (event) {
    // Check if the clicked element is a button and has the 'delete' class
    if (event.target.nodeName === "BUTTON" && event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement; // Get the parent <li> element
        listItem.style.opacity = 0; // Fade out effect
        listItem.style.transform = "translateX(100%)"; // Slide out effect

        // Remove the item after the animation completes
        listItem.addEventListener('transitionend', function() {
            listItem.remove();
            console.log("Task deleted!");
        });
    }
});
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let dltBtn = document.createElement("button");
//     dltBtn.innerText = "Delete";
//     dltBtn.classList.add("delete");
    
//     item.appendChild(dltBtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//     if(event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }   
// })



// // let delBtns = document.querySelectorAll(".delete");
// // for(delbtn of delBtns) {
// //     delbtn.addEventListener("click", function () {
// //       let par = this.parentElement;
// //       console.log(par);
// //       par.remove();
// //     });
// // }

