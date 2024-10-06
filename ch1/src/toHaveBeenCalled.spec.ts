import { sum, obj } from "./toHaveBeenCalled";

test("sum가 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

test("sum가 1번 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum가 1번 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("obj의 minus 함수가 1번 호출 되었다.(spy함수 생성)", () => {
  const minusSpy = jest.fn(obj.minus);
  minusSpy(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(1);
});

test("obj.minus 함수가 1번 호출 되었다.(spyOn)", () => {
  jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  console.log(obj.minus);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});
