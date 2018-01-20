const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// autoincrement
const autoIncrement = require('mongoose-auto-increment-fix');

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  USstate: { type: String, required: true },
  zip: { type: Number, required: true },
  country : { type: String, required: true, default: "United States" },
  invoices : [{ type: Schema.Types.ObjectId, ref: 'Invoice'}]
});

// autoincrement plugin
clientSchema.plugin(autoIncrement.plugin, {model:"Client", field:"clientId"});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;