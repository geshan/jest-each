describe("Math.pow", () => {
  test.each([
    [2, 1, 2],
    [2, 2, 4],
    [2, 3, 8],
  ])(
    "Math.pow(%i, %i) should return %i",
    (base, exponent, expected) => {
      expect(Math.pow(base, exponent)).toBe(expected);
    }
  );
});

describe("Math.pow", () => {
  test.each`
base | exponent | expected
${2} | ${1} | ${2}
${2} | ${2} | ${4}
${2} | ${3} | ${8}
`(
    "Math.pow($base, $exponent) should return $expected",
    ({
      base,
      exponent,
      expected
    }) => {
      expect(Math.pow(base, exponent)).toBe(expected);
    }
  );
});
