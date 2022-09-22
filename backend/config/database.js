const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`DB CONNECTED WITH SERVER : ${data.connection.host}`);
  });
};
module.exports = connectDB;
