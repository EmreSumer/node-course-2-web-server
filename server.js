const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req,res) => {
  res.render('home.hbs');
});
app.get('/about' , (req,res)=>{
  res.render('about.hbs', {
    pageTitle : "About Page",
    
  });
}
);




app.listen(1000);
