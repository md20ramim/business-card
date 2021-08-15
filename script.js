// submit-btn
const submitBtn =document.getElementById('submit');
submitBtn.addEventListener('click', function(){
    const cardInfo = document.getElementById('card-info');
    cardInfo.style.display="none";
    const cardArea = document.getElementById('card-area');
    cardArea.style.display="block";

    const logoLetter = document.getElementById("logo-letter").value;
    const yourLogo = document.getElementById("logo-part").innerText;
    document.getElementById("logo-part").innerText = logoLetter;

    const nameLetter = document.getElementById("your-name").value;
    const yourName = document.getElementById("name").innerText;
    document.getElementById("name").innerText = nameLetter;

    const professionLetter = document.getElementById("your-profession").value;
    const yourProfession = document.getElementById("profession").innerText;
    document.getElementById("profession").innerText = professionLetter;

    const companyLetter = document.getElementById("company-letter").value;
    const yourCompany = document.getElementById("company-name").innerText;
    document.getElementById("company-name").innerText = companyLetter;

    const taglineLetter = document.getElementById("tagline-letter").value;
    const yourTagline = document.getElementById("company-tagline").innerText;
    document.getElementById("company-tagline").innerText = taglineLetter;

    const emailLetter = document.getElementById("your-email").value;
    const yourEmail = document.getElementById("email").innerText;
    document.getElementById("email").innerText = emailLetter;

    const contuctLetter = document.getElementById("your-contuct").value;
    const yourcontuct = document.getElementById("contuct").innerText;
    document.getElementById("contuct").innerText = contuctLetter;

    const locationLetter = document.getElementById("location-letter").value;
    const yourLocation = document.getElementById("your-location").innerText;
    document.getElementById("your-location").innerText = locationLetter;

    const websiteLetter = document.getElementById("website-letter").value;
    const yourWebsite = document.getElementById("your-website").innerText;
    document.getElementById("your-website").innerText = websiteLetter;
})