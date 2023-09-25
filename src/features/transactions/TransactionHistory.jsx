import { useState } from "react";
import "./transactionHistory.scss";
import { selectHistory } from "./transactionsSlice";
import { useSelector } from "react-redux";

/** Displays a table row with transaction information  */
const TransactionRow = ({id, type, amount, balance }) => (
  <tr key={id}>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector(selectHistory);
  const [showHistory, setShowHistory] = useState(true);

  return (
    <section className="transactions-history container">
      <div>
        <h2 style={{ display: "inline-block" }}>Transaction History</h2>
        <button
          onClick={() => setShowHistory(!showHistory)}
        >
        {showHistory ? "Hide Logs":"Show Logs"}
        </button>
      </div>
      {showHistory && (
        <table>
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>

          <tbody>
            {history.toReversed().map((transaction) => {
              return (
                <TransactionRow
                  type={transaction.type}
                  amount={transaction.amount}
                  balance={transaction.balance}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </section>
  );
}
