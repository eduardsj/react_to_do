module.exports = app => {
  const notes = require("../controllers/note.controller.js");

  var router = require("express").Router();

  // Create a new notes
  router.post("/", notes.create);

  // Retrieve all notes
  router.get("/", notes.findAll);

  // Retrieve all notes
  router.get("/published", notes.findAllPublished);

  // Retrieve a single notes with id
  router.get("/:id", notes.findOne);

  // Update a notes with id
  router.put("/:id", notes.update);

  // Delete a notes with id
  router.delete("/:id", notes.delete);

  // Delete all notes
  router.delete("/", notes.deleteAll);

  app.use("/api/notes", router);
};
