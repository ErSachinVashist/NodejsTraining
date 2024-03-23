var Comments = require('../../models/comments.model.js')

module.exports = (req, res) => {
    Comments.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        res.send({ error: err.message })
    });
}