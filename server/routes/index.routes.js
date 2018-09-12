let path = require('path')
let express = require('express')

module.exports = function () {
  let router = express.Router()

  router.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      res.redirect(`/users/${req.user.username}`)
    } else {
      res.sendFile(path.join(req.viewPath, 'index.html'))
    }
  })

  return router
}
