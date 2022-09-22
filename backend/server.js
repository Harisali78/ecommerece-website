const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/database");
// configure environment variables
dotenv.config({ path: "backend/config/config.env" });

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// connecting DB
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${process.env.PORT}`
  );
});

// Unhandled Promis Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
