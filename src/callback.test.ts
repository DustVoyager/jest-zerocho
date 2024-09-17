import { timer } from "./callback";

// callback함수를 테스트할때는 done을 넣어야한다.
// callback있으면 promise로 바꾸는게 편하다.
test("타이머 잘 실행되나요?", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});
