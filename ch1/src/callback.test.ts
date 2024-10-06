import { timer } from "./callback";

// callback함수를 테스트할때는 done을 넣어야한다.
// callback있으면 promise로 바꾸는게 편하다.
// test("타이머 잘 실행되나요?", (done) => {
//   timer((message: string) => {
//     expect(message).toBe("success");
//     done();
//   });
// });

test("타이머 잘 실행되나?", (done) => {
  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});

test("시간아 빨리가라!", (done) => {
  expect.assertions(1); // test횟수로 확신을 주자
  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  //jest.runAllTimers(); // 시간을 빨리감아주기~
  jest.advanceTimersByTime(10000); //
});
