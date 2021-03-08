const config = {
  development: {
    PORT: 5000,
    DB_CONNECTION_URL: "mongodb://localhost/cubicle",
    JWT_SECRET: "keyboard cats"
  },
  production: {
    PORT: 80,
    DB_CONNECTION_URL: "mongodb://localhost/cubicle",
    JWT_SECRET: "keyboard cats"
  }
}

module.exports = config[process.env.NODE_ENV];