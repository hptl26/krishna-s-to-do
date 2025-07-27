let btn = document.querySelector("button");
let ul = document.getElementById("task-list");
let inp = document.querySelector("input");

// Removed: Sidebar toggle elements
// let sidebar = document.getElementById("sidebar");
// let sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
// let mainContent = document.querySelector(".main-content");


// Function to add a new task (reusable)
function addTask() {
    let taskText = inp.value.trim(); // Trim whitespace from input

    if (taskText === "") { // Prevent adding empty tasks
        alert("Please enter a task!");
        return;
    }

    let item = document.createElement("li");
    item.innerText = taskText;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");

    item.appendChild(dltBtn);
    ul.appendChild(item);
    inp.value = ""; // Clear the input field
    inp.focus(); // Keep focus on input for quick entry
}

// Event listener for Add Task button click
btn.addEventListener("click", addTask);

// Event listener for Enter key press on input field
inp.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask(); // Call the addTask function when Enter is pressed
    }
});


// Event delegation for deleting tasks
ul.addEventListener("click", function (event) {
    // Check if the clicked element is a button and has the 'delete' class
    if (event.target.nodeName === "BUTTON" && event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement; // Get the parent <li> element

        // Apply fade and slide animation
        listItem.style.opacity = 0;
        listItem.style.transform = "translateX(100%)";

        // Remove the item after the animation completes
        listItem.addEventListener('transitionend', function() {
            listItem.remove();
            console.log("Task deleted!");
        });
    }
});

// Add functionality to sidebar items (e.g., pre-fill input)
let activityListItems = document.querySelectorAll(".activity-list li");
activityListItems.forEach(item => {
    item.addEventListener("click", function() {
        // Extract text, remove icon text if present
        let activityText = this.textContent.replace(/^(.*?)\s+/, '').trim();
        // More robust way to get text, excluding the icon if it's the first child
        const iconElement = this.querySelector('.sidebar-icon');
        if (iconElement && iconElement.nextSibling) {
             activityText = iconElement.nextSibling.textContent.trim();
        } else {
            activityText = this.textContent.trim();
        }

        inp.value = activityText; // Set input value to the activity name
        inp.focus(); // Focus on the input to easily add it
    });
});

// Removed: Logic for Sidebar Toggle
// sidebarToggleBtn.addEventListener("click", function() {
//     sidebar.classList.toggle("hidden");
//     mainContent.classList.toggle("sidebar-hidden-adjusted");
//     sidebarToggleBtn.classList.toggle("shifted");

//     if (sidebar.classList.contains("hidden")) {
//         sidebarToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
//     } else {
//         sidebarToggleBtn.innerHTML = '<i class="fas fa-times"></i>';
//     }
// });
