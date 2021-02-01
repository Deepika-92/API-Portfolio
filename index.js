const express = require('express')
const {
  getAllResume, getResumeById
} = require('./controllers/resume')
const {
  getAllExperience, getExpById
} = require('./controllers/experience')
const {
  getAllEducation, getEduById
} = require('./controllers/education')

const app = express()

app.get('/resume', getAllResume)
app.get('/resume/:id', getResumeById)

app.get('/experience', getAllExperience)
app.get('/experience/:id', getExpById)
app.get('/education', getAllEducation)
app.get('/education/:id', getEduById)

app.listen((1337), () => {
  // eslint-disable-next-line no-console
  console.log('Listening to 1337 ...')
})
