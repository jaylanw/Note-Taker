var noteData = require("../Develop/db/db.json");

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    res.json("Your Note Was Saved!");
  });

  // app.delete("/api/notes/:id", function (req, res) {
  // });

}