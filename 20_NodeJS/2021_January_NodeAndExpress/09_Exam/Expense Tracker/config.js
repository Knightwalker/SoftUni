const config = {
  development: {
    PORT: 3000,
    DB_CONNECTION_URL: "mongodb://localhost/knightwalker_expense_tracker"
  },
  production: {
    PORT: 3000,
    DB_CONNECTION_URL: "mongodb://localhost/knightwalker_expense_tracker"
  }
}

module.exports = config[process.env.NODE_ENV];