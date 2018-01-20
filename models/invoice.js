const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// autoincrement
const autoIncrement = require('mongoose-auto-increment-fix');

const invoiceSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  USstate: { type: String, required: true },
  zip: { type: Number, required: true },
  country : { type: String, required: true, default: "United States" },
  clientFirstName: { type: String, required: true },
  clientLastName: { type: String, required: true },
  clientCompanyName: { type: String, required: true },
  clientStreetAddress: { type: String, required: true },
  clientCity: { type: String, required: true },
  clientState: { type: String, required: true },
  clientZip: { type: Number, required: true },
  clientCountry : { type: String, required: true, default: "United States" },
  dateOfIssue: { type: Date, default: Date.now },
  dueDate: { type: Date, default: Date.now },
  lineDescription: { type: String, required: true },
  lineRate: { type: Number, required: true },
  lineQty: { type: Number, required: true },
  lineTotal: { type: Number, required: true },
  favorite: { type: Boolean, required: true, default: false},
  status: {type: String, required: true, default: 'Draft'}
});

// autoincrement plugin
invoiceSchema.plugin(autoIncrement.plugin, {model:"Invoice", field:"invoiceId"});
const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
