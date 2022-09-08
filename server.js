// dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const db = mongoose.connection

//models
const Fact = require('./models/fact')
const Char = require('./models/char')

//seeding
const factData = require('./utilities/factData')
const charData = require('./utilities/charData')

// Environment Variables (getting ready for Heroku)
const app = express();
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3001

// mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongodb not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use (cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public')) 

//Routes
const factRouter = require('./controllers/factRouter.js')
app.use('/facts', factRouter)

const charRouter = require('./controllers/charRouter.js')
app.use('/character', charRouter)

app.get('/seed', async (req, res) => {
  await Fact.deleteMany({});
  await Fact.insertMany(factData);
  await Char.deleteMany({});
  await Char.insertMany(charData);
  res.send('done!');
});

app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})