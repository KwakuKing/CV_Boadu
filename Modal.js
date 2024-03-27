
document.addEventListener("click", myFunction);

function myFunction() {
    let text;
    let person = prompt("Bitte Ihren Namen:", "MAX MUSTERMANN");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hallo " + person + "! Danke, dass du dir Zeit nimmst, meinen Lebenslauf anzuschauen. LG David";
    }
    alert(text);
}
