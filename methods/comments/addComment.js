

var Comments = require('../../models/comments.model.js')

module.exports = (req, res) => {
    if (!req.body.email) res.send({ error: "Required input missing" })
    const { name, email, text } = req.body
    const comment = new Comments({
        name, email, text
    })

    comment.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.send({ error: err.message })
    });
}