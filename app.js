const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8000;

//EXPRESS APPS
app.use('/static',express.static('static'));


//PUG FILING
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

//END POINTS
app.get('/',(req,res)=>{
  res.status(209).render('index.pug',{title:'Dance Academy'})
});


//STARTING SERVER
app.listen(port,()=>{
  console.log(`The website is running on localhost:${port}`);
});
