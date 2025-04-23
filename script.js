console.log("hello")

const container = document.querySelector(".container")







for (let i = 1; i < 16; i++) {
   for (let j = 1; j < 16; j++) {
    const square = document.createElement("div")
    square.classList.add("square");
    square.style.width = "30px"
    square.style.height = "30px"
    square.style.backgroundColor = "grey"
    square.style.border = "1px solid black"
    square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor ="black"
    })
    container.appendChild(square)
   }
    
}

function cleanGround() {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.style.backgroundColor = "grey";
      });
}

const clean = document.querySelector(".clean")
clean.addEventListener("click", () => {
    cleanGround()
});


