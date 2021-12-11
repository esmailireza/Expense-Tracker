import { useState } from "react";

const TransActionForm = ({ addTransaction }) => {
  const [formValue, setFormValue] = useState({
    type: "Expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValue.desc}
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValue.amount}
      />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValue.type === "expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValue.type === "income"}
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add transaction</button>
    </form>
  );
};

export default TransActionForm;
