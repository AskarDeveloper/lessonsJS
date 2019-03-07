'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let question1_1 = prompt("Введите обязательную статью расходов в этом месяце"),
  question1_2 = prompt("Во сколько обойдется?"),
  question2_1 = prompt("Введите обязательную статью расходов в этом месяце"),
  question2_2 = prompt("Во сколько обойдется?");

let expenses = {
  question1: question1_1,
  question2: question1_2
};

let appData = {
  moneyData: money,
  timeData: time,
  expenses: {"question1_1": "question1_2"},
  optionalExpenses: {},
  income: [],
  savings: false
};

// console.log(appData.expenses);

alert(money / 30);