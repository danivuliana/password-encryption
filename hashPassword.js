const prompt = require("prompt");
const bcrypt = require("bcrypt");

prompt.start();

prompt.get([
  { name: "password", hidden: true, replace: "*" },
  { name: "confirmPassword", hidden: true, replace: "*" }
], async function (err, result) {
  if (err) {
    console.error("Помилка вводу:", err);
    return;
  }

  const { password, confirmPassword } = result;

  if (password !== confirmPassword) {
    console.log("Паролі не співпадають.");
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Захешований пароль:", hashedPassword);
  } catch (error) {
    console.error("Помилка при хешуванні паролю:", error);
  }
});
