import sortHeroes from "../sortHeroes";

test("testing the sortHeroes function", () => {
  const heroes = [
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
  ];

  const expectedResult = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  const result = sortHeroes(heroes);
  expect(result).toEqual(expectedResult);
});