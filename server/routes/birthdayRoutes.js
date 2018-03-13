module.exports = function(app) {
    var birthdays = require('../controllers/birthdaysController');
  
    // Birthday Routes
    app.route('/birthdays')
      .get(birthdays.allBirthdays)
      .post(birthdays.addBirthday);
  
  
    app.route('/birthdays/:birthdayId')
      .delete(birthdays.deleteBirthday);
  };