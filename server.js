// dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const db = mongoose.connection

//models
const Fact = require('./models/fact')
const Art = require('./models/art')
const Char = require('./models/char')
const Journal = require('./models/journal')

//seeding
const factData = require('./utilities/factData')
const artData = require('./utilities/artData')
const charData = require('./utilities/charData')
const journalData = require('./utilities/journalData')

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

//Routes
const factRouter = require('./controllers/factRouter.js')
app.use('/fact', factRouter)

const artRouter = require('./controllers/artRouter.js')
app.use('/art', artRouter)

const charRouter = require('./controllers/charRouter.js')
app.use('/char', charRouter)

const journalRouter = require('./controllers/journalRouter.js')
app.use('/journal', journalRouter)

app.get('/seed', async (req, res) => {
  await Fact.deleteMany({});
  await Fact.insertMany(factData);
  await Art.deleteMany({});
  await Art.insertMany(artData);
  await Char.deleteMany({});
  await Char.insertMany(charData);
  await Journal.deleteMany({});
  await Journal.insertMany(journalData);
  res.send('done!');
});

// Middleware
app.use(express.urlencoded({ extended: false }))// does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // tell express to use public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})