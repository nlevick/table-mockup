import utils from "./utils";

it("selects all values", () => {
  expect(utils.getSelectAllValue(5, 5)).toStrictEqual(1);
  expect(utils.getSelectAllValue(0, 5)).toStrictEqual(0);
  expect(utils.getSelectAllValue(2, 5)).toStrictEqual(-1);
});
