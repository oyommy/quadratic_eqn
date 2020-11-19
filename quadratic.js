function calculate(){
    let result = document.querySelector(".result")
    let a = document.querySelector(".numa").value;
    let b = document.querySelector(".numb").value;
    let c = document.querySelector(".numc").value;
    let root1 = ((-b + Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / (2 * a)).toFixed(1)
    let root2 = ((-b - Math.sqrt((Math.pow(b, 2) - (4 * a * c)))) / (2 * a)).toFixed(1)
    console.log("The roots of this equation are " + root1 + " and " + root2);
    result.textContent = "The roots of this equation are " + root1 + " and " + root2

}

let btn = document.querySelector(".collapsible");
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });