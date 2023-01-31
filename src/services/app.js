const express = require('express');
const app = express();

const collection = require("./db/dbConnect");
const cors = require('cors');
// const dbConnect = require("./db/dbConnect");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// dbConnect();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// LOGIN
app.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" });
    next();
});

app.post("/signin", async (req, res) => {
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