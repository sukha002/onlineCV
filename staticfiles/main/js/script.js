const input = document.getElementById("question");
const button = document.getElementById("askButton");


/* =========================================
   ASK BUTTON
========================================= */

button.addEventListener("click", askQuestion);


/* =========================================
   ENTER KEY
========================================= */

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        askQuestion();
    }

});


/* =========================================
   CHAT FUNCTION
========================================= */

function askQuestion() {

    const question = input.value.trim();

    if (!question) {
        return;
    }


    /*
        Temporary response.

        Later we can replace this with
        your real AI backend / API.
    */

    alert(
        "Archie AI\n\n" +
        "You asked:\n" +
        question +
        "\n\nAI conversation will be connected here."
    );


    input.value = "";

    input.focus();
}