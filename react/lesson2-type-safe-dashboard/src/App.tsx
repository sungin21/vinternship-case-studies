import React, { useReducer } from "react";

interface Transaction {
  id: string;
  amount: number;
  currency: "USD" | "EUR";
  date: Date;
}

interface BudgetState {
  transactions: Transaction[];
  balance: number;
}

type BudgetAction =
  | {
      type: "addIncome";
      payload: Transaction;
    }
  | {
      type: "addExpense";
      payload: Transaction;
    };

const initialState: BudgetState = {
  transactions: [],
  balance: 0,
};

function budgetReducer(
  state: BudgetState,
  action: BudgetAction
): BudgetState {
  switch (action.type) {
    case "addIncome":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        balance: state.balance + action.payload.amount,
      };

    case "addExpense":
      if (state.balance - action.payload.amount < 0) {
        alert("Insufficient balance!");
        return state;
      }

      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        balance: state.balance - action.payload.amount,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    budgetReducer,
    initialState
  );

  const addIncome = () => {
    const income: Transaction = {
      id: Date.now().toString(),
      amount: 500,
      currency: "USD",
      date: new Date(),
    };

    dispatch({
      type: "addIncome",
      payload: income,
    });
  };

  const addExpense = () => {
    const expense: Transaction = {
      id: Date.now().toString(),
      amount: 200,
      currency: "USD",
      date: new Date(),
    };

    dispatch({
      type: "addExpense",
      payload: expense,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Secure Banking Dashboard</h1>

      <h2>Balance: ${state.balance}</h2>

      <button onClick={addIncome}>
        Add Income
      </button>

      <button
        onClick={addExpense}
        style={{ marginLeft: "10px" }}
      >
        Add Expense
      </button>

      <h2>Transaction History</h2>

      <ul>
        {state.transactions.map((tx) => (
          <li key={tx.id}>
            {tx.amount} {tx.currency} -{" "}
            {tx.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;