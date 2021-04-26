const mongoose = require("mongoose");
const url =
  "mongodb+srv://vinceCRUD:vinceCRUD@cluster0.kyv1l.mongodb.net/crud?retryWrites=true&w=majority";

const connectToDB = async () => {
  let db = mongoose.connection;
  db.on("error", () => {
    console.error.bind(console, "connection error:");
  });
  db.once("open", (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to MongoDB at", url);
    }
  });
  db.on("close", () => {
    console.log("Connection closed");
  });
  db.on("reconnect", () => {
    console.log("Reconnected");
  });
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectToDB,
};
