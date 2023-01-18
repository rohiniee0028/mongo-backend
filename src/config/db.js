const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://rohini19394:rk786@backend-server-dployed.vl3lfst.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser : "true", useUnifiedTopology:"true"}
  );
};
module.exports = connect;