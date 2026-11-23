const themaKnop = document.querySelector("#themaKnop");
const opgeslagenThema = localStorage.getItem("thema");

if (opgeslagenThema === "donker") {
    document.body.classList.add("donker");
    themaKnop.textContent = "Licht thema";
}
function veranderThema() {
    console.log("Er is op themaknop geklikt!");
    document.body.classList.toggle("donker");
    if (document.body.classList.contains("donker")) {
    localStorage.setItem("thema", "donker");
} else {
    localStorage.setItem("thema", "licht");
}
    if (document.body.classList.contains("donker")) {
        themaKnop.textContent = "Licht thema";
    } else {
        themaKnop.textContent = "Donker thema";
    }
}
if (themaKnop) 
themaKnop.addEventListener("click", veranderThema);

const contactFormulier = document.querySelector("#contactFormulier");
function verzenden(event) {
   event. preventDefault();
   if (naamVeld.value.trim() ==="") {
    console.log("vul je naam in");
    return;
   
}
if (emailVeld.value.trim() === "") {
    console.log("vul je email in");
    return;
}

if (!emailVeld.value.includes("@")) {
    melding.textContent = "Vul een geldig e-mailadres in";
    return;
}

if (berichtVeld.value.trim() === "") {
    melding.textContent = "Vul je bericht in";
    return;
}

melding.textContent = "Alle velden zijn correct ingevuld";
}

if (contactFormulier) {
contactFormulier.addEventListener("submit", verzenden);

}

const naamVeld = document.querySelector("#volledigeNaam");

const emailVeld = document.querySelector("#email");
 
const berichtVeld = document.querySelector("#tekst");

const melding = document.querySelector("#melding");

document.querySelectorAll("nav a").forEach(function(link) {
    if (window.location.pathname.endsWith(link.getAttribute("href"))) {
        link.classList.add("actief");
    }
});