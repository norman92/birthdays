exports.allBirthdays = function(req, res) {
    return [];
};
  
exports.addBirthday = function(req, res) {
    return req.body;
};
  
exports.deleteBirthday = function(req, res) {
    res.json({ message: 'Task successfully deleted' });
};