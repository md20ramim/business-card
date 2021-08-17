// submit-btn
function inputText(letter, part){
    const logoLetter = document.getElementById(letter).value;
    const yourLogo = document.getElementById(part).innerText;
    document.getElementById(part).innerText = logoLetter;
    document.getElementById(letter).value = "";
}
const submitBtn =document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    const cardTemplates= document.getElementById("templates");
    cardTemplates.style.display="none";
    const congrates = document.getElementById("congrates");
    congrates.style.display= "block";
    const downloadBtn = document.getElementById("download-btn-id");
    downloadBtn.style.display ="block";

    inputText("logo-letter", "logo-part");
    inputText("your-name", "name");
    inputText("your-profession", "profession");
    inputText("company-letter", "company-name");
    inputText("tagline-letter","company-tagline");
    inputText("your-email", "email");
    inputText("your-contuct", "contuct");
    inputText("location-letter", "your-location");
    inputText("website-letter","your-website");
})