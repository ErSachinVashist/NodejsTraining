var express = require('express'),
    router = express.Router(),
    addComment = require('./methods/comments/addComment'),
    getComments = require('./methods/comments/getComments');

router.use('/api/:type', (req, res, next) => {
    if (req.params.type !== 'comments') {
        return res.json({ error: 'Unknown API endpoint' })
    }
    return next()
});

router.get('/api/comments', getComments)
router.post('/api/comments', addComment)
module.exports = router;