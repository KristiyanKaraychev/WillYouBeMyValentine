let statements_count = 0;
let statement_repeating = "I will be sad";

document.addEventListener("DOMContentLoaded", function () {
    let buttonYes = document.getElementById("buttonYes");
    let buttonNo = document.getElementById("buttonNo");

    // store original button size
    let originalSizeYes = parseFloat(
        window.getComputedStyle(buttonYes).fontSize
    );
    let originalSizeNo = parseFloat(window.getComputedStyle(buttonNo).fontSize);

    // store original button text
    let originalTextNo = window.getComputedStyle(buttonNo).innerText;

    buttonYes.addEventListener("click", function () {
        window.location.href = "pages/yes.html";
    });

    buttonNo.addEventListener("click", function () {
        // declaring a temporary variable to hold reusable code for clarity;
        let buttonYesTemp = document.getElementById("buttonYes");
        let buttonNoTemp = document.getElementById("buttonNo");

        // window.getComputedStyle(buttonTemp).fontSize returns the font size in "{num}px" format, so we use parseFloat to cut out the "px";
        let buttonSizeTemp = parseFloat(
            window.getComputedStyle(buttonYesTemp).fontSize
        );

        // incrementing the font size by a given number
        buttonSizeTemp += 25;

        let statements = [
            "Please?",
            "Are you sure?",
            "Are you really sure?",
            "I will be sad",
        ];

        if (statements_count < 4) {
            buttonNoTemp.innerText = statements[statements_count];
            statements_count++;
        } else {
            statement_repeating =
                statement_repeating.slice(0, 10) +
                "very " +
                statement_repeating.slice(10);
            buttonNoTemp.innerText = statement_repeating;
        }

        // changing the font size of the button to the new value; important to add the unit of measurement at the end (in this case "px");
        document.getElementById("buttonYes").style.fontSize =
            buttonSizeTemp + "px";
    });

    // resets buttons on reloading
    resetButtons(originalSizeYes, originalSizeNo, originalTextNo);

    // window.addEventListener("pageshow", function (event) {
    //     if (event.persisted) {
    //         resetButtons(originalSizeYes, originalSizeNo, originalTextNo);
    //     }
    // });
});

function resetButtons(styleYes, styleNo, textNo) {
    let buttonYes = document.getElementById("buttonYes");
    let buttonNo = document.getElementById("buttonNo");

    buttonYes.style.fontSize = button1 + "px";
    buttonNo.style.fontSize = button2 + "px";

    buttonNo.innerText = textNo;

    statements_count = 0;
    statement_repeating = "I will be sad";
}
