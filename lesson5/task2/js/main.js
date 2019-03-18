'use strict';
let startBtn = document.getElementById('start'),
  budget = document.getElementsByClassName('budget-value'),
  dayBudget = document.getElementsByClassName('daybudget-value'),
  level = document.getElementsByClassName('level-value'),
  expenses = document.getElementsByClassName('expenses-value'),
  optionalExpenses = document.getElementsByClassName('optionalexpenses-value'),
  income = document.getElementsByClassName('income-value'),
  monthSavings = document.getElementsByClassName('monthsavings-value'),
  yearSavings = document.getElementsByClassName('yearsavings-value'),

  expensesInput = document.getElementsByClassName('expenses-item'),

  allButtons = document.getElementsByTagName('button'),
  approveFirstBtn = allButtons[0],
  approveSecondBtn = allButtons[1],
  calculateBtn = allButtons[2],

  optionalExpensesInput = document.querySelectorAll('.optionalexpenses-item'),

  choosIncomeInput = document.querySelector('.choose-income'),
  checkbox = document.querySelector('#savings'),
  chooseSumInput = document.querySelector('.choose-sum'),
  choosePercentInput = document.querySelector('.choose-percent'),
  yearValueInput = document.querySelector('.year-value'),
  monthValueInput = document.querySelector('.month-value'),
  dayValueInput = document.querySelector('.day-value');