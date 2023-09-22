import { useState } from "react";

import "./transactions.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withdrawal,deposit,transfer } from "./transactionsSlice";

/**
 * Allows users to deposit to, withdraw from, and transfer money from their account.
 */
export default function Transactions() {
  //  Get the balance from the Redux store using the useSelector hook
  const balance = useSelector((state)=> state.transactions.balance);
  const dispatch = useDispatch();

  const [amountStr, setAmountStr] = useState(0);
  const [error,setError] = useState(null);
  const [recipient,setRecipient] = useState("");

  
   const inputHandle = (e) =>{
    
    if(e.target.value <= balance){
      setError("");
    }
    setAmountStr(e.target.value);
   }

  /** Dispatches a transaction action based on the form submission. */
  const onTransaction = (e) => {
    e.preventDefault();

    // This changes depending on which button the user clicked to submit the form.
    // It will be either "deposit", "withdraw", or "transfer".
    const action = e.nativeEvent.submitter.name;
  

    const amount = +amountStr;

    if((action === 'withdrawal' || action === 'transfer') && balance < amount){
      setError("Not sufficient balance");
    }
   
    
   
    
    // Dispatch the appropriate transaction action based on `action`
    if(action === 'deposit'){
     
       dispatch(deposit({amount:amount}))
    }
    if(action === 'withdrawal' && balance >= amount){
       dispatch(withdrawal({amount:amount}))
      
    }
    if(action === 'transfer' && balance >= amount){
      dispatch(transfer({amount:amount,name:recipient}))
    }
  };

  return (
    <section className="transactions container">
      <h2>Transactions</h2>
      <figcaption>{error && <p style={{color:'red',fontWeight: 700}}>{error}</p>}</figcaption>
      <figure>
         
        <figcaption>Current Balance &nbsp;</figcaption>
        <strong>${balance.toFixed(2)}</strong>
      </figure>
      <form onSubmit={onTransaction}>
        <div className="form-row">
          <label>
            Amount
            <input
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={amountStr}
              onChange={inputHandle}
            />
          </label>
          <div>
            <button default name="deposit">
              Deposit
            </button>
           
            <button name="withdrawal">Withdraw</button>
          </div>
        </div>
        <div className="form-row">
          <label>
            Transfer to
            <input 
            type="text" 
            placeholder="Recipient Name"
             value={recipient} 
             onChange={(e)=>setRecipient(e.target.value)} />
          </label>
          <button name="transfer">Transfer</button>
        </div>
      </form>
    </section>
  );
}
