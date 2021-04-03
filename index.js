// Your code here

//const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown"), function(event) {
    
    if (event.key === "ArrowLeft") {
    
    const leftNumbers = dodger.style.left.replace("px", "");
    
    const left = parseInt(leftNumbers, 10);

   
    dodger.style.left = `${left - 1}px`; 
};

function moveDodgerLeft() {
    
    const leftNumbers = dodger.style.left.replace("px", "");
    
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
    document.addEventListener("keydown"), function(e) {
    if (e.key === "ArrowLeft") {

    moveDodgerLeft();    
    }
        
        
    
    
};

//Right:

function moveDodgerRight() {
    
    const leftNumbers = dodger.style.left.replace("px", "");
    
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}; 

document.addEventListener("keydown"), function(e) {
    
    const rightNumbers = dodger.style.right.replace("px", "");
    
    const right = parseInt(rightNumbers, 10);

    if (e.key === "ArrowRight") {
        
        
        
        moveDodgerRight();
    }
};
