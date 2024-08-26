import streakLife from "../streakLife";

test.each([
  [{ name: "маг", health: 90 }, "healthy"],
  [{ name: "лучник", health: 50 }, "wounded"],
  [{ name: "мечник", health: 10 }, "critical"],
])("testing streakLife function for object %o", (options, status) => {
  const result = streakLife(options);
  expect(result).toBe(status);
});
