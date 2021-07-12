//import modules
import express from 'express'
import * as student from './data/student.js'


//create express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')

// Mount middelware (app.use)

//Mount routes

app.get('/', function(req, res) {
    res.redirect('/student')
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