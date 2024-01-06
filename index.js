const express = require("express");
const cors = require('cors');
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { notesRouter } = require("./routes/notes.routes");
require('dotenv').config();
const port = process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/note", notesRouter);



app.get("/", (req, res) => {
    res.send({
        message: "Api is working now"
    })
})

app.listen(port, async () => {
    try {
        await connection
        console.log("Database is connected")
    } catch (err) {
        console.log(err);
    }
    console.log("Server is running on port", port);
});

