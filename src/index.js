const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')
const port = 3000

db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// HTTP logger
app.use(morgan('combined'))

// Routes init
route(app)

// Template engine
app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 