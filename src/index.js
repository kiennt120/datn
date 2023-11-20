const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')
const port = 3000

db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// HTTP logger
app.use(morgan('combined'))

app.use(methodOverride('_method'))

app.engine(
  'hbs', 
  handlebars.engine({
    extname: '.hbs', 
    helpers: {
      sum: (a, b) => a + b,
    }
  })
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 