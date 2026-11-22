const themaKnop = document.querySelector("#themaKnop");
function veranderThema() {
    console.log("Er is op themaknop geklikt!");
    document.body.classList.toggle("donker");
    if (document.body.classList.contains("donker")) {
        themaKnop.textContent = "Licht thema";
    } else {
        themaKnop.textContent = "Donker thema";
    }
}
themaKnop.addEventListener("click", veranderThema);

const contactFormulier = document.querySelector("#contactFormulier");
function verzenden(event) {
   event. preventDefault();
   if (naamVeld.value ==="") {
    console.log("vul je naam in");
    return;
   
}
if (emailVeld.value ==="") {
    console.log("vul je email in");
    return;
}
    console.log("contactformulier verzenden");
    
}
if (contactFormulier) {
contactFormulier.addEventListener("submit", verzenden);
}

const naamVeld = document.querySelector("#volledigeNaam");

const emailVeld = document.querySelector("#email");
 
