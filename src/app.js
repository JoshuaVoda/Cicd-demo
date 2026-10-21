const express = require("express");
const { createTask, sortByPriority } = require("./tasks");

const app = express();
app.use(express.json());
const tasks = [];

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/tasks", (req, res) => res.json(sortByPriority(tasks)));
app.post("/tasks", (req, res) => {
  try {
    const task = createTask(req.body.title, req.body.priority);
    tasks.push(task);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
