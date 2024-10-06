import { obj } from "./module";

// jest mock은 호이스팅 된다.
jest.mock("./module");

test("module test", () => {
  jest.replaceProperty(obj, "prop", "replaced");
  console.log(obj);
});
