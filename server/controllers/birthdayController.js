
var birthdays = [
    {
        date: new Date('1995-12-17T00:00:00'),
        name: 'Joe Blogs'
    }, {
        date: new Date('1987-04-13T00:00:00'),
        name: 'Bob Marley'
    }, {
        date: new Date('1977-01-31T00:00:00'),
        name: 'Elton John'
    }
]


exports.allBirthdays = function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(birthdays))
};
  
exports.addBirthday = function(req, res) {
    console.log(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(req.body))
};
  
exports.deleteBirthday = function(req, res) {
    res.json({ message: 'Birthday successfully deleted' })
};