// Simple task tracker logic, kept separate from the server so it can be unit tested.
function createTask(title, priority = "medium") {
  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("Title is required");
  }
  const allowed = ["low", "medium", "high"];
  if (!allowed.includes(priority)) {
    throw new Error("Priority must be low, medium, or high");
  }
  return { title: title.trim(), priority, done: false };
}

function sortByPriority(tasks) {
  const rank = { high: 0, medium: 1, low: 2 };
  return [...tasks].sort((a, b) => rank[a.priority] - rank[b.priority]);
}

module.exports = { createTask, sortByPriority };
