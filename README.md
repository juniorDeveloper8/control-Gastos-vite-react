# Expense Tracker with Vite ReactJS
A simple app to track income and expenses with react

## Features

- Graph with percentage in real time
- Income and expenses list item

## Project structure

```
$PROJECT_ROOT
└── src
    ├── main.jsx                     # Root
    ├── components                   # Components React
    │   ├── Balance.jsx              # Component 
    │   ├── ExpenseChart.jsx         # Graphic Component
    │   └── IncomeExpenses.jsx       # Component of income and expenses
    │   └── transactions             # Transaction Component
    │       ├── TransactionForm.jsx  # Table Component  
    │       ├── TransactionItem.jsx  # Item Component
    │       └── TransactionList.jsx  # List Component
    │   
    └── context             # Components
        ├── AppReducer.jsx  # Actions Component
        └── GlobalState.tsx # State Component

```
## How to dev
This project can be run from locally

```sh
npm run dev