let drink = "Кава";
switch (drink) {
  case "Кава":
    console.log("Ви обрали каву");
    break;
  case "Чай":
    console.log("Ви обрали чай");
    break;
  case "Сік":
    console.log("Ви обрали сік");
    break;
  default:
    console.log("Такого варіанта немає");
}

let day = "четверг";
switch (day.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log("Це робочий день");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний день");
    break;
  default:
    console.log("Такого дня тижня не існує");
}

let monthNumber = 5;
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Такого номера місяця не існує");
}


let color = "зелений";
switch (color.toLowerCase()) {
  case "червоний":
    console.log("стоп");
    break;
  case "зелений":
    console.log("йти");
    break;
  case "жовтий":
    console.log("чекай");
    break;
  default:
    console.log("Такого кольору не існує");
}


let num1 = 12;
let num2 = 3;
let operator = "+";
switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Ділення на нуль неможливе");
    } else {
      console.log(`Результат ділення: ${num1 / num2}`);
    }
    break;
  default:
    console.log("Невідомий оператор");
}
