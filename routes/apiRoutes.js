const path = require("path");
const fs = require("fs");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;
            let noteList = JSON.parse(data);
            noteList.push(newNote);

            fs.writeFile("db/db.json", JSON.stringify(noteList), (err) => {
                if (err) throw err;
                console.log("Your Note Was Saved!");
                return res.json(noteList);
            });
        });
    });

app.delete("/api/notes/:id", function (req, res) {
        let deleteNote = req.params.id;
    fs.readFile("db/db.json", (err, data) => {
        if (err) throw err;
            let noteList = JSON.parse(data);
              for (let i = 0; i < noteList.length; i++) {
                if (noteList[i].id === deleteNote) {
                    noteList.splice(i, 1);
    fs.writeFile("db/db.json", JSON.stringify(noteList), function (err) {
        if (err) throw err;
        console.log("Your note was deleted!");
            return res.json(noteList);
                    });
                }};
        });
    });
};