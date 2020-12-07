const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
const tracksRoute = require('./routes/tracks');
const shipRoute = require('./routes/shiping');


//middlewares
app.use('/posts', postsRoute);
app.use('/tracks', tracksRoute);
app.use('/ship', shipRoute);
app.all('*', (req, res, next) => {
  res.status(404).send({
  status: 404,
  error: 'Not found'
  })
 });
 app.use((err, req, res, next ) =>{
   err.statusCode = err.statusCode || 500;
   err.status = err.status || 'error';

   res.status(err.statusCode).json({
     status: err.status,
     message: err.message
   });
 });

let courses =[
  {id: 1, name: 'java'},
  {id:2, name:'mysql'},
  {id:3, name:'php'}
];


app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };
  const result = Joi.validate(req.body, schema);
  console.log(result);

  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c=> c.id === parseInt(req.params.id));
  if(!course) res.status(404).send('404 ID not found')
  res.send(course);
});

app.get('/api/courses/:post/:year/', (req, res) => {
  res.send(req.query);
});


mongoose.connect(process.env.DB_CONNECTION, { 
  useNewUrlParser: true, 
  useFindAndModify: false, 
  useCreateIndex: true,
  useUnifiedTopology: true }, (err)=>{
  if (err) {
   console.log(err);
  } else {
    
    console.log('connect to db!');
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})