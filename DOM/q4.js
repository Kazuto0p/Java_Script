const dbutton = document.getElementById("drop");
const options = document.getElementById("options");

dbutton.addEventListener("click", () => {

    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
});
