const app = require('./express.js');
// config
const config = require('./config/config.js');
//assets router
const assetsRouter = require('./assets-router')
// mongoDB connection
const mongoose = require('mongoose');

//require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
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


// Routes
const authRoutes = require('./routes/Auth');
const catalogRoutes = require('./routes/Catalog');
const categoryRoutes = require('./routes/Category');
const flowerRoutes = require('./routes/Flower');
const occasionRoutes = require('./routes/Occasion');
const userAccountRoutes = require('./routes/UserAccount');
const userSessionRoutes = require('./routes/UserSession');
const vendorRoutes = require('./routes/Vendor');

// Use routes
app.use('/assets', assetsRouter);
app.use('/api', authRoutes);
app.use('/api', catalogRoutes);
app.use('/api', categoryRoutes);
app.use('/api', flowerRoutes);
app.use('/api', occasionRoutes);
app.use('/api', userAccountRoutes);
app.use('/api', userSessionRoutes);
app.use('/api', vendorRoutes);