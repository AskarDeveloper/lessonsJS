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
  choosIncomeInput = document.querySelector('.choose-income'),
  checkbox = document.querySelector('#savings'),
  chooseSumInput = document.querySelector('.choose-sum'),
  choosePercentInput = document.querySelector('.choose-percent'),
  yearValueInput = document.querySelector('.year-value'),
  monthValueInput = document.querySelector('.month-value'),
  dayValueInput = document.querySelector('.day-value');

  console.log(budgetValue);