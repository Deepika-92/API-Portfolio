const express = require('express')
const { getAllResume, getExpById, createNewExp } = require('./controllers/resumeC')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (request, response) => response.render('index'))

app.get('/resume', getAllResume)
app.get('/experience/:id', getExpById)
app.post('/experience', bodyParser.json(), createNewExp)
// app.delete('/experience/:id', deleteExp)


app.all('*', (request, response) => response.sendStatus(404))

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337...')
})
