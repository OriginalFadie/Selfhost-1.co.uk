const input = document.querySelector("input");
const terminal_input = document.getElementById("terminal-text");

input.addEventListener("input", updateValue);

function updateValue(e) {
    terminal_input.textContent = e.target.value;
}


