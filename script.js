let resbtn = document.querySelector(".Resbtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

resbtn.addEventListener("click", function () {
    var pdfpath = './note.jpg'
    var link = document.createElement('a')
    link.href = pdfpath;
    link.download = 'note.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})


submit.addEventListener("click", function () {
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")
    if (email.value == "" && pass.value == "") {
        alert("Fill data")
    }
    else {
        alert("Logged in")
    }
})


let ul = document.querySelector("ul");
bar.addEventListener("click", function () {
    ul.classList.toggle("showData");
    if (ul.className == "showData") {
        bar.className = "fa-solid fa-xmark"
    }
    else {
        bar.className = "fa-solid fa-bars"
    }
})