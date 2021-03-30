const controller = require('./controllers');
const router  = require('express').Router();


router.get('/questions', controller.qa.getQa)
router.post('/ansers', controller.qa.postQa)

module.exports = router