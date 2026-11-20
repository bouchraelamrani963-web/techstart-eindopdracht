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