// server
require('dotenv').config();
const app = require('./express.js');
// config
const path = require('path');
const config = require(path.resolve(__dirname, '../config/config.js'));
//const config = require('../config/config.js');
// mongoDB connection
const mongoose = require('mongoose');


const mongoUri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
/*mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Welcome to the database Serverjs!"))
  .catch(err => console.error(`Cannot connect to database`));

// to show what port the server is on
app.listen(config.port, () => {
  console.info(`Server started on the port ${config.port}`);
});
*/

mongoose.connect(config.mongoUri)
  .then(() => console.log("Welcome to the database Serverjs!"))
  .catch(err => console.error(`Cannot connect to database`, err));

console.log('Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not Set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not Set');
console.log('NODE_ENV:', process.env.NODE_ENV);
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
app.use('/api', authRoutes);
app.use('/api', catalogRoutes);
app.use('/api', categoryRoutes);
app.use('/api', flowerRoutes);
app.use('/api', occasionRoutes);
app.use('/api', userAccountRoutes);
app.use('/api', userSessionRoutes);
app.use('/api', vendorRoutes);

