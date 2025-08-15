# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


# 💰 Personal Expense Tracker

## Project Overview
This project is a **Personal Expense Tracker** where users can track their daily expenses. Users can **add**, **view**, **edit**, and **delete** expenses.

Frontend is built using **React.js**. Backend uses **Node.js + Express + MongoDB**.


## 🛠 Features

**Live Demo:** [https://expense-tracker.vercel.app](https://expense-tracker.vercel.app)

### Backend (Node.js + Express + MongoDB)
- **POST /api/expenses** → Add a new expense  
- **GET /api/expenses** → Fetch all expenses  
- **PATCH /api/expenses/:id** → Update a specific expense  
- **DELETE /api/expenses/:id** → Delete a specific expense  

**Validation Rules:**
- `title`: Required, min length 3  
- `amount`: Required, must be a number > 0  
- `date`: Required, must be a valid date  

### Frontend (React.js)
- **Add Expense Form:** Fields → title, amount, category (dropdown), date (date picker)  
- **Expense List View:**  
  - Display all expenses in a table layout  
  - Show total expense amount at the top  
  - Show category badges (Food, Transport, Shopping, Others)  
- **Edit/Delete Functionality:**  
  - Edit → Pre-fill form with existing values  
  - Delete → Remove expense from list & database  

### UI/UX & Responsiveness
- Fully responsive (Mobile, Tablet, Desktop)  
- Tailwind CSS used 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
