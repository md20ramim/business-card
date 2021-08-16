// submit-btn
const submitBtn =document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    const cardTemplates= document.getElementById("templates");
    cardTemplates.style.display="none";
    const congrates = document.getElementById("congrates");
    congrates.style.display= "block";
    const downloadBtn = document.getElementById("download-btn-id");
    downloadBtn.style.display ="block";

    const logoLetter = document.getElementById("logo-letter").value;
    const yourLogo = document.getElementById("logo-part").innerText;
    document.getElementById("logo-part").innerText = logoLetter;
    document.getElementById("logo-letter").value = "";

    const nameLetter = document.getElementById("your-name").value;
    const yourName = document.getElementById("name").innerText;
    document.getElementById("name").innerText = nameLetter;
    document.getElementById("your-name").value=""

    const professionLetter = document.getElementById("your-profession").value;
    const yourProfession = document.getElementById("profession").innerText;
    document.getElementById("profession").innerText = professionLetter;
    document.getElementById("your-profession").value ="";

    const companyLetter = document.getElementById("company-letter").value;
    const yourCompany = document.getElementById("company-name").innerText;
    document.getElementById("company-name").innerText = companyLetter;
    document.getElementById("company-letter").value ="";

    const taglineLetter = document.getElementById("tagline-letter").value;
    const yourTagline = document.getElementById("company-tagline").innerText;
    document.getElementById("company-tagline").innerText = taglineLetter;
    document.getElementById("tagline-letter").value = "";

    const emailLetter = document.getElementById("your-email").value;
    const yourEmail = document.getElementById("email").innerText;
    document.getElementById("email").innerText = emailLetter;
    document.getElementById("your-email").value = "";

    const contuctLetter = document.getElementById("your-contuct").value;
    const yourcontuct = document.getElementById("contuct").innerText;
    document.getElementById("contuct").innerText = contuctLetter;
    document.getElementById("your-contuct").value="";

    const locationLetter = document.getElementById("location-letter").value;
    const yourLocation = document.getElementById("your-location").innerText;
    document.getElementById("your-location").innerText = locationLetter;
    document.getElementById("location-letter").value= "";

    const websiteLetter = document.getElementById("website-letter").value;
    const yourWebsite = document.getElementById("your-website").innerText;
    document.getElementById("your-website").innerText = websiteLetter;
    document.getElementById("website-letter").value = "";
})