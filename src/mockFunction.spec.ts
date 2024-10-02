import { obj } from "./mockFunction";

let spyFn;
let beforeEachCount = 0;
let afterEachCount = 0;

// 테스트 그룹화
describe("beforeEach, afterEach 적용", () => {
  // 각 테스트 실행 전에
  beforeEach(() => {
    console.log("beforeEach", ++beforeEachCount);
  });

  // 각 테스트 실행 후에
  afterEach(() => {
    console.log("afterEach", ++afterEachCount);
    jest.restoreAllMocks();
  });

  test("obj.minus 함수가 1번 호출 되었다.(spyOn)", () => {
    spyFn = jest.spyOn(obj, "minus");
    const result = obj.minus(1, 2);
    console.log(obj.minus);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(-1);
  });

  test("obj.minus에 스파이를 심고 실행도 안되게", () => {
    spyFn = jest.spyOn(obj, "minus").mockImplementation();
    const result = obj.minus(1, 2);
    console.log(obj.minus);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).not.toBe(-1);
  });

  test("obj.minus에 스파이를 심고 리턴값을 바꾸게", () => {
    spyFn = jest.spyOn(obj, "minus").mockImplementation((a, b) => a + b);
    const result = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(3);
  });

  test("obj.minus에 스파이를 심고 리턴값이 서로 다르게 나오게", () => {
    spyFn = jest
      .spyOn(obj, "minus")
      .mockImplementationOnce((a, b) => a + b)
      .mockImplementationOnce(() => 5);
    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);
    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(-1);
    // spyFn.mockClear(); // times, with 초기화
    // spyFn.mockReset(); // mockClear + mockImplementation(() => {})
    // spyFn.mockRestore(); // 아예 전부 없애버린다.
  });
});

test("obj.minus에 스파이를 심고 리턴값이 서로 다르게 나오게2", () => {
  spyFn = jest
    .spyOn(obj, "minus")
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementationOnce(() => 5)
    .mockImplementation(() => 3);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(3);
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(3);
});

test("obj.minus에 스파이를 심고 리턴값이 서로 다르게 나오게(mockReturnValue)", () => {
  spyFn = jest.spyOn(obj, "minus").mockReturnValue(5);
  const result1 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result1).toBe(5);
});

test("obj.minus에 스파이를 심고 리턴값이 서로 다르게 나오게(mockReturnValueOnce)", () => {
  spyFn = jest
    .spyOn(obj, "minus")
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(3)
    .mockReturnValue(8);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(obj.minus).toHaveBeenCalledTimes(3);
  expect(result1).toBe(5);
  expect(result2).toBe(3);
  expect(result3).toBe(8);
});

test.todo("나중에 맨들어야지..");

// 모든 테스트 실행 전에
beforeAll(() => {
  console.log("이 파일에 준비사항 실행 - database 연결");
});

// 모든 테스트 실행 후에
afterAll(() => {
  console.log("모든 테스트가 끝난 후 - beforeAll에서 한거 정리하는");
});

// // 각 테스트 실행 전에
// beforeEach(() => {
//   console.log(
//     "각 테스트 전에 실행됨 - 테스트 간의 공통사항들 뽑아놓는다. 변수초기화 등"
//   );
// });

// // 각 테스트 실행 후에
// afterEach(() => {
//   console.log(
//     "각 테스트 후에 실행됨 - 테스트 후에 정리할떄, mockRestore같은거"
//   );
//   // spyFn.mockRestore();
//   jest.restoreAllMocks();
// });
