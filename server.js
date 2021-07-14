//import modules
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as student from './data/student.js'


//create express app

const app = express()

//view engine
app.set(
    'views',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
  )

// configure the app (app.set)
app.set('view engine', 'ejs')

// Mount middelware (app.use)
app.use(express.urlencoded({ extended: false }))

//Mount routes

app.get('/', function(req, res) {
    res.redirect('/home')
  })
  app.get('/home', function(req, res) {
    res.render('home')
  })

app.get('/student', function(req,res){
    student.find({}, function(error,student){
        res.render('student',{
            student: student,
            error: error,
        })
    })
})



//tell the app to listen on port 3000

app.listen(3000, function(){
    console.log('Listening on port 3000')
})