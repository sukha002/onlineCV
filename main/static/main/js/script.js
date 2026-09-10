const input = document.getElementById("question");
const button = document.getElementById("askButton");

button.addEventListener("click", askArchie);

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        askArchie();
    }

});


function askArchie() {

    const question = input.value.trim();

    if (!question) {
        return;
    }

    alert(
        "Hi! I'm Archie. AI functionality is coming soon!\n\n" +
        "You asked: " + question
    );

    input.value = "";
}