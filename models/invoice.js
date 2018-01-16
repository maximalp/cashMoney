const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// autoincrement
const autoIncrement = require('mongoose-auto-increment-fix');

const invoiceSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  USstate: { type: String, required: true },
  zip: { type: String, required: true },
  country : { type: String, required: true, default: "United States" },
  clientFirstName: { type: String, required: true },
  clientLastName: { type: String, required: true },
  clientCompanyName: { type: String, required: true },
  clientStreetAddress: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientState: { type: String, required: true },
  clientZip: { type: String, required: true },
  amountDue: { type: String, required: true },
  lineDescription: { type: String, required: true },
  lineRate: { type: String, required: true },
  lineQty: { type: String, required: true },
  lineTotal: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// autoincrement plugin
invoiceSchema.plugin(autoIncrement.plugin, {model:"Invoice", field:"invoiceId"});
const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
