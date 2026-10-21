const test = require("node:test");
const assert = require("node:assert");
const { createTask, sortByPriority } = require("../src/tasks");

test("creates a task with default priority", () => {
  assert.deepStrictEqual(createTask("Write report"), { title: "Write report", priority: "medium", done: false });
});

test("rejects an empty title", () => {
  assert.throws(() => createTask("  "), /Title is required/);
});

test("rejects an invalid priority", () => {
  assert.throws(() => createTask("Deploy", "urgent"), /Priority must be/);
});

test("sorts tasks high to low", () => {
  const sorted = sortByPriority([createTask("a", "low"), createTask("b", "high"), createTask("c")]);
  assert.deepStrictEqual(sorted.map((t) => t.priority), ["high", "medium", "low"]);
});
