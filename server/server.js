var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  

var routes = require('./routes/birthdayRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Birthdays API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});