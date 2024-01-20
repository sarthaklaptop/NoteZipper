const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv")

const app = express();

app.get("/", (req, res) => {
    res.send(`Server is started on port ${PORT}`);
})

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    // res.json(notes);
    const note = notes.find((n) => n._id == req.params.id)
    // console.log(note)
    res.send(note)
})

const PORT = process.env.PORT || 3000;


app.listen(5000, console.log(`Sarver started on post ${PORT} Hellllllo`));