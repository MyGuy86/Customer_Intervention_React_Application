const express = require('express');
const router = express.Router();
const elevators = require('../controllers/elevators');
/* GET elevator by ID. */
// http://localhost:3000/elevators/5
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await elevators.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting elevators `, err.message);
      next(err);
    }
});

router.get('/', async function(req, res, next) {
  try {
    res.json(await elevators.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting elevators `, err.message);
    next(err);
  }
});


module.exports = router;