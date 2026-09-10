const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("phonenumber").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phonenumber,
                password
            })
        });

        const result = await response.json();

        message.textContent = result.message;

    } catch (error) {
        console.error(error);
        message.textContent = "Something went wrong.";
    }
});
