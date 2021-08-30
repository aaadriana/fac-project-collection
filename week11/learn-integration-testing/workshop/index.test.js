test("Add numbers", () => {
  equal(calculate(2, "+", 2), 4);
  equal(calculate(100, "+", 33.3), 133.3);
});

test("Subtract numbers", () => {
  equal(calculate(3, "-", 2), 1);
  equal(calculate(66, "-", 20.5), 45.5);
});

test("Multiply numbers", () => {
  equal(calculate(6, "*", 8), 48);
  equal(calculate(77, "*", 27.5), 2117.5);
});

test("Divide numbers", () => {
  equal(calculate(4, "/", 2), 2);
  equal(calculate(10.5, "/", 2.5), 4.2);
});

test("Errors for invalid sign", () => {
  equal(calculate(4, "$", 2), "Please enter a valid sign (+, -, *, /)");
});

test("Can add string numbers", () => {
  equal(calculate("1", "+", "2"), 3);
});

test("calculator multiplies numbers and updates the page correctly", () => {
  const aInput = document.querySelector("input[name='a']");
  const signInput = document.querySelector("select");
  const bInput = document.querySelector("input[name='b']");

  aInput.value = "2";
  signInput.value = "*";
  bInput.value = "3";

  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();

  const result = document.querySelector("#result");
  equal(result.textContent, "6");

  result.textContent = "";
});
