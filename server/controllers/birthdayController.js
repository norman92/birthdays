
var birthdays = [
    {
        date: new Date(1995, 12, 17, 0, 0, 0),
        name: 'Joe Blogs'
    }, {
        date: new Date(1987, 4, 13, 0, 0, 0),
        name: 'Bob Marley'
    }, {
        date: new Date(1977, 01, 31, 0, 0, 0),
        name: 'Elton John'
    }
]


exports.allBirthdays = function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(birthdays))
};
  
exports.addBirthday = function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(req.body))
};
  
exports.deleteBirthday = function(req, res) {
    res.json({ message: 'Birthday successfully deleted' })
};