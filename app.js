const btn = document.querySelectorAll(".card__element-container");
const myResult = document.querySelector(".card__result");
//loop through each element in the botton nodelist and for each of these elements add the evenlistener that calls the function select on click
btn.forEach(el =>{
    el.addEventListener("click", select);
});

function select(e) {//creat select fuction and pass e as param e is an object that contains info about the event which has just occured
    btn.forEach(el =>{// this loop clears any previously selected btn element by removing the active class
        el.classList.remove("active");
    })
    e.target.classList.add("active"); //After removing the active class this adds the active class to the current selected event
    myResult.textContent = e.target.textContent;//the textcontent of myresult is now updated by assigning the textcontent of the current event e to it
}


// when the user presses the submit button
function submitFunction() {
    if (myResult.textContent === "") {
        alert("Please choose a number from 1 to 5 ; )");
    } else {
        document.getElementsByClassName("card__rating")[0].style.display = "none";
        document.getElementsByClassName("card__thank")[0].style.display = "flex";
    }
}
