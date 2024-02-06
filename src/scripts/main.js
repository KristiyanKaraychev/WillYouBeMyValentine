document.getElementById("buttonYes").addEventListener("click", function () {
    window.location.href = "/pages/yes.html";
});

document.getElementById("buttonNo").addEventListener("click", function () {
    // declaring a temporary variable to hold reusable code for clarity;
    let buttonTemp = document.getElementById("buttonYes");

    // window.getComputedStyle(buttonTemp).fontSize returns the font size in "{num}px" format, so we use parseFloat to cut out the "px";
    let buttonSizeTemp = parseFloat(
        window.getComputedStyle(buttonTemp).fontSize
    );

    // incrementing the font size by a given number
    buttonSizeTemp += 25;

    // changing the font size of the button to the new value; important to add the unit of measurement at the end (in our case "px");
    document.getElementById("buttonYes").style.fontSize = buttonSizeTemp + "px";
});
