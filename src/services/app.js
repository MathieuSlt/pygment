const express = require('express');
const collection = require("./mongo")
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// LOGIN

app.get("/", cors(), (req, res) => {

});

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email })
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (error) {
        console.log(error);
    }
});


// SIGNUP

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await collection.findOne({ email: email })
        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});