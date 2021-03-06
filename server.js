// Start of Boilerplate =========================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const autoIncrement = require('mongoose-auto-increment-fix');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cashmoney",
  {
    useMongoClient: true
  }
);

// Make sure mongoose is on
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("good to go");
});
autoIncrement.initialize(db);

// End of Boilerplate =========================================================

// Models
const Invoice = require("./models/invoice");
const Expense = require("./models/expense");
const Clients = require("./models/client");


// Routes => Controller
require('./routes/InvoiceAPI.js')(app);
require('./routes/ExpenseAPI.js')(app);
require('./routes/DashboardAPI.js')(app);
require('./routes/ClientAPI.js')(app);








// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Port Setup
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
