let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let tacheSchema = require('../models/Tache');

router.route('/creer-tache').post((req, res, next) => {
  tacheSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


router.route('/').get((req, res) => {
  tacheSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/editer-tache/:id').get((req, res) => {
  tacheSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/update-tache/:id').put((req, res, next) => {
  tacheSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Tâche mise à jour!')
    }
  })
})

// Delete Student
router.route('/suppr-tache/:id').delete((req, res, next) => {
  tacheSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;