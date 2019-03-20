'use strict';
let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesInput = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  optionalExpensesInput = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncomeInput = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  chooseSumInput = document.querySelector('.choose-sum'),
  choosePercentInput = document.querySelector('.choose-percent'),
  yearValueInput = document.querySelector('.year-value'),
  monthValueInput = document.querySelector('.month-value'),
  dayValueInput = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.moneyData = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValueInput.value = new Date(Date.parse(time)).getFullYear();
  monthValueInput.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValueInput.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesInput.length; i++) {
    let a = expensesInput[i].value,
      b = expensesInput[++i].value;

    if ((typeof (a)) === 'string' && (typeof (a)) != null &&
      (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
  appData.expensesSum = sum;
});

expensesInput[3].addEventListener('input', function () {
  expensesBtn.disabled = false;
});

expensesBtn.disabled = true;

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesInput.length; i++) {
    let opt = optionalExpensesInput[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function () {

  if (appData.moneyData != undefined) {

    appData.moneyPerDay = ((appData.moneyData - appData.expensesSum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Сначала укажите обязательные расходы';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

startBtn.addEventListener('click', function () {
  countBtn.disabled = false;
});

countBtn.disabled = true;

chooseIncomeInput.addEventListener('input', function () {
  let items = chooseIncomeInput.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSumInput.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSumInput.value,
      percent = +choosePercentInput.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercentInput.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSumInput.value,
      percent = +choosePercentInput.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  moneyData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};