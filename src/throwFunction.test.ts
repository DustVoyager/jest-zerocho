import { error, customError, CustomError } from "./throwFunction";

test("error가 잘 난다.", () => {
  expect(() => error()).toThrow(Error); //error 는 함수로 감싸서 넣어준다.
  expect(() => customError()).toThrow(CustomError);
});

test("error가 잘난다. (try/ catch)", () => {
  try {
    error();
  } catch (error) {
    expect(error).toStrictEqual(new Error());
  }
});
