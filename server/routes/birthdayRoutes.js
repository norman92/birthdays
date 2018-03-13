module.exports = function(app) {
    var birthdays = require('../controllers/birthdayController');
  
    // Birthday Routes
    app.route('/birthdays')
      .get(birthdays.allBirthdays)
      .post(birthdays.addBirthday);
  
  
    app.route('/birthdays/:birthdayId')
      .delete(birthdays.deleteBirthday);
  };