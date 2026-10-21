const test = require("node:test");
const assert = require("node:assert");
const app = require("../src/app");

test("health endpoint and task API work end to end", async () => {
  const server = app.listen(0);
  const base = `http://localhost:${server.address().port}`;
  try {
    const health = await fetch(`${base}/health`);
    assert.strictEqual(health.status, 200);

    const bad = await fetch(`${base}/tasks`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: "" }) });
    assert.strictEqual(bad.status, 400);

    const good = await fetch(`${base}/tasks`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: "Ship it", priority: "high" }) });
    assert.strictEqual(good.status, 201);
  } finally {
    server.close();
  }
});
