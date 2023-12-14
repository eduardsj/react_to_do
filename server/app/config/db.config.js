module.exports = {
  HOST: "localhost",
  USER: "app_u",
  PASSWORD: "ttt",
  DB: "todo",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
