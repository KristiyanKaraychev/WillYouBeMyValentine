document.getElementById("buttonYes").addEventListener("click", function () {
    window.location.href = "pages/yes.html";
});

let statements_count = 0;
let statement_repeating = "I will be sad";

document.getElementById("buttonNo").addEventListener("click", function () {
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
    document.getElementById("buttonYes").style.fontSize = buttonSizeTemp + "px";
});
