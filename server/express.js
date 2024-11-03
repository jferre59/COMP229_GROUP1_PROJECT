// require module
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express()
// Static public folder
app.use("/",express.static(path.join(__dirname,"public")));
// API endpoint
app.get('/api/v1', (req, res) => {
    res.json({
      proect:"Group 2 project",
    });
});
// Extract routes going from index.html
app.get('/',function (req,res){
  res.sendFile(path.join(__dirname,"../public","index.html"))
  res.send({
    message: "Flower Vendor"
  })
});

app.use(express.json())
//use the routes you created
//makes it parse in json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())


module.exports = app;