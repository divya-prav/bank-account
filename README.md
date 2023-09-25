# Workshop - Bank Account

In this workshop, you will be implementing a simple bank account application. A user will be able to see their current balance, make deposits and withdrawals, transfer money to another user, and see a log of all transactions they've made in their current session.

## Getting Started

1. Clone the repository down and install the dependencies.
2. This workshop is built using Vite; use `npm run dev` to start the application.


## Pseudocode

 ### transactionsSlice.js
     
    1: Import createSlice from reduxjs/toolkit
 
    2: Create a createSlice function named transactionSlice with name, initial state, and reducer function.

    3: name as "transactions", initial state as balance 0, and history :[]

    4: declare reducer function as withdrawal, transfer, and deposit with two argument state and payload.

    5: In the withdrawal reducer function decrease the payload amount with balance and push the {type, amount, balance}     object to the history array.
   
    6: In the reducer function decrease the payload amount with balance and push the {type, amount, balance} object to the history array.


    7: In the withdrawal reducer function decrease the payload amount with balance and push the {type, amount, balance} object to the history array.

    8: Finally export the reducer function and actions functions.

 ### store.js

    1.import configureStore from redux/toolkit and transactionReduction from transactionSlice 

    2.Create a configure store with transaction reducer to use in the application.

    3.export the store function as default.

 ### App.jsx
  
   1.Import store from store.js file

   2.Import Provider from react-redux

   3.Provide the store and <Provider> to the App component.

 ### Transaction.jsx

    1. Import useSelector and useDispatch hook from react-redux
    2. Import withdrawal,deposit,transfer reducer functions from transactionSlice.js
    3. Get the balance from slice function by using useSelector hook.
    4. Each time the balance state change re-render the balance and update the balance value.
    5. Whenever the form submit event happens need to capture the event name and action.
    6. It could be either deposit, transfer or withdrawal.
    7. Depends on the action made by the user , call the appropriate action from the transaction reducer.
   
 ### TractionHistory.jsx
 
   1. Import the useSelector from react-redux
   2. Import the selectHistory from transactionSlice
   3. map the history array.
   4. To get the last transaction on top reverse the array.
   5. Return the TractionRow for each array.
   
    




## Extensions

If you're done early, try adding some of the following features:

- Prevent actions that would result in a negative balance.
- Add better form validation and error messages.
- Allow a user to undo their last transaction.
- Use `sessionStorage` to persist the user's balance between refreshes.
- Use Sass to style the application.

## Submission

Please submit a link to your Github repository.
