export const ROUTES = Object.freeze({
  TRANSACTION: {
    name: "Transactions",
    path: "/transactions"
  },
  ACCOUNT: {
    name: "Account",
    path: "/account-details"
  }
});

export const ACCOUNT_FILTER = Object.freeze([
  "Savings Account",
  "Checking Account",
  "Auto Loan Account",
  "Credit Card Account",
  "Investment Account",
  "Personal Loan Account",
  "Money Market Account",
  "Home Loan Account ",
]);

export const TRANSACTION_FILTER = Object.freeze([
  "deposit",
  "withdrawal",
  "invoice",
  "payment",
]);