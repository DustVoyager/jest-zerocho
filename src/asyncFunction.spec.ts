import * as fns from "./asyncFunction";

test("okPromise 테스트", () => {
  const okSpy = jest.fn(fns.okPromise);
  return expect(okSpy()).resolves.toBe("ok"); // resolve시 return을 붙여줘야한다.
});

test("okPromise 테스트 1-1", () => {
  jest.spyOn(fns, "okPromise").mockResolvedValue("ok");
  return expect(fns.okPromise()).resolves.toBe("ok");
});

test("okPromise 테스트 2", () => {
  const okSpy = jest.fn(fns.okPromise);
  return okSpy().then((result) => {
    expect(result).toBe("ok"); // then이 들어가면 resolves를 안붙여도 된다. 꼭 return 붙이기
  });
});

test("okPromise 테스트 3 - async", async () => {
  const okSpy = jest.fn(fns.okPromise);
  const result = await okSpy();
  expect(result).toBe("ok");
});

test("noPromise 테스트1", () => {
  const okSpy = jest.fn(fns.noPromise);
  return expect(okSpy()).rejects.toBe("no");
});

test("noPromise 테스트 1-1", () => {
  jest.spyOn(fns, "noPromise").mockRejectedValue("no");
  return expect(fns.noPromise()).rejects.toBe("no");
});

test("noPromise 테스트2", () => {
  const okSpy = jest.fn(fns.noPromise);
  return okSpy().catch((reject) => {
    expect(reject).toBe("no");
  });
});

// async에서 no 부분은 조금 다르다.
test("noPromise 테스트3 - async", async () => {
  const okSpy = jest.fn(fns.noPromise);
  try {
    const result = await okSpy();
  } catch (error) {
    expect(error).toBe("no");
  }
});

test("okAsync 테스트", () => {
  const okSpy = jest.fn(fns.okAsync);
  return expect(okSpy()).resolves.toBe("ok"); // resolve시 return을 붙여줘야한다.
});

test("okAsync 테스트 2", () => {
  const okSpy = jest.fn(fns.okAsync);
  return okSpy().then((result) => {
    expect(result).toBe("ok"); // then이 들어가면 resolves를 안붙여도 된다. 꼭 return 붙이기
  });
});

test("okAsync 테스트 3 - async", async () => {
  const okSpy = jest.fn(fns.okAsync);
  const result = await okSpy();
  expect(result).toBe("ok");
});
