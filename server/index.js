const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
app.use(
  cors({
    origin: "*",
  })
);
// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());

// static middleware
app.use(express.static(path.join(__dirname,'..', '/public')))

// app.use('/api', require('./api')) // include our routes!

app.get('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
}) // Send index.html for any other requests

// error handling middleware
// app.use((err, req, res, next) => {
//   if (process.env.NODE_ENV !== 'test') console.error(err.stack)
//   res.status(err.status || 500).send(err.message || 'Internal server error')
// })

app.listen(8080, function(){
    console.log('Server on port 8080');
})