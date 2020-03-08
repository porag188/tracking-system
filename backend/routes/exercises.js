const express = require('express');
const router = express.Router();
let Execise = require('../models/Exercise');

router.get('/', (req, res) => {
  Execise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error' + err));
});
router.post('/add', (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercies = new Execise({
    username,
    description,
    duration,
    date
  });
  newExercies
    .save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error' + err));
});

router.post('/update/:id', (req, res) => {
  Execise.findById(req.params.id).then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise
      .save()
      .then(() => res.json('Execise Update'))
      .catch(err => res.status(400).json('Error:' + err));
  });
});

router.get('/:id', (req, res) => {
  // Execise.findByIdAndDelete(req.params.id)
  Execise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error' + err));
});

router.delete('/:id', (req, res) => {
  Execise.findById(req.params.id)
    .then(exercise => res.json('Delete successfully...'))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;
