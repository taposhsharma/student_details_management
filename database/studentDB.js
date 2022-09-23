require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function studentDB() {
// Connect to MongoDB locally
mongoose.connect("mongodb+srv://student:student@cluster0.3bs29yc.mongodb.net/details?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
}



