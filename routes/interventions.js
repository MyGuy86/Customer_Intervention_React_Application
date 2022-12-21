const express = require('express');
const router = express.Router();
const interventions = require('../controllers/interventions');
/* GET elevator by ID. */
// http://localhost:3000/interventions/5
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await interventions.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting interventions `, err.message);
      next(err);
    }
});

router.get('/', async function(req, res, next) {
  try {
    res.json(await interventions.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting interventions `, err.message);
    next(err);
  }
});


module.exports = router;