// Select the input element with the id "input"
const input = document.querySelector("#input");

// Select all elements with the class "buttons"
const buttons = document.querySelectorAll(".buttons");

// Loop through each button element
buttons.forEach((button) => {
    // Add a click event listener to each button
    button.addEventListener("click", (e) => {
        // Check the text content of the clicked button
        if (e.target.textContent === "C") {
            // If the button is "C" (Clear), set the input content to an empty string
            input.innerHTML = " ";
        } else if (e.target.textContent === "<") {
            // If the button is "<" (Backspace), remove the last character from the input content
            input.innerHTML = input.innerHTML.slice(0, -1);
        } else if (e.target.textContent === "=") {
            // If the button is "=" (Equal), evaluate the expression and set the input content to the result
            input.innerHTML = eval(input.innerHTML);
        } else {
            // For other buttons (numbers and operators), append their text content to the input content
            input.innerHTML += e.target.textContent;
        }
        input.scrollLeft=input.scrollWidth
    });
});
