import { after3days } from "./date";

test("3일 후를 리턴한다.", () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 10, 12));
  expect(after3days()).toStrictEqual(new Date(2024, 10, 15));
});

afterEach(() => {
  jest.useRealTimers();
});
