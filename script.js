const container = document.querySelector("#container");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

function createGrid () {
    for (i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square"); 
        container.appendChild(div);
    }
}

updateGrid = () => {
    container.innerHTML = "";
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );
    for (i = 0; i < userInput.value * userInput.value; i++) {
        const div =document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
    console.log(userInput.value);
}

const square = document.querySelector("div");
square.addEventListener("mouseover", (e) => {
    e.target.classList.replace("square", "color");
})

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", () => {
    container.innerHTML = ""; 
    userInput.value = "";
    container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
})

createGrid();