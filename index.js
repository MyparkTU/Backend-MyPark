const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const Authentication = require('./routes/Authentication');
const DeviceRoutes = require('./routes/DeviceRoutes');
const PlacesRoutes = require('./routes/PlacesRoutes');
const ReportRoutes = require('./routes/ReportRoutes');

dbConnect();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ message: "Hey! This is your mypark server response!" });
});
app.use("/Authentication",Authentication)
app.use("/devices",DeviceRoutes);
app.use("/Places",PlacesRoutes);
app.use("/Report",ReportRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3001.");
  });
  
module.exports = app;
  

