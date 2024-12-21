document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let result;

    switch (operation) {
        case "Add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                result = "Erreur : Division par zéro !";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Veuillez sélectionner une opération valide.";
    }

    // Optional: Format the result if it's a number
    if (typeof result === 'number') {
        result = Math.round(result * 1000) / 1000; // Rounds to 3 decimal places
    }

    document.getElementById("result").value = result;
});