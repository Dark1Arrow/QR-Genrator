const quoteBox = document.querySelector(".qr")
const image = document.querySelector(".qr img");
const input = document.querySelector(".input");

function genrator() {
    const value = input.value;
    if (value == "") {
        alert("Please Enter Text or link");
        quoteBox.style.display = "none";
    } else {
        console.log(value);
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        quoteBox.style.display = "block";
        quoteBox.classList.add("show");
    }
}