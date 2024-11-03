const app = require('./express.js');
// config
const config = require('./config/config.js');
// mongoDB connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri,{useNewUrlParser:true,
  useUnifiedTopology:true
})
//then catch to check if database connected correctly
.then(()=>console.log("Welcome to the database!"))
.catch(err => console.error(`Cannot connect to databse`));

//to show what port the server is on
app.listen(config.port,()=>{
  console.info(`Server started on the port ${config.port}`)
});
