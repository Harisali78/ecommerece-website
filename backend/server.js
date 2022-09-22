const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/database");
// configure environment variables
dotenv.config({ path: "backend/config/config.env" });

// connecting DB
connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${process.env.PORT}`
  );
});
