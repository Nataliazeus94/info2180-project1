document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const Input = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = Input.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailInput.value = ""; 
        }
    });
});
