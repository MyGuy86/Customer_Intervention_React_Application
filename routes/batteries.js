const express = require('express');
const router = express.Router();
const batteries = require('../controllers/batteries');
const columns = require('../controllers/columns');
/* GET elevator by ID. */
// http://localhost:3000/batteries/5
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await batteries.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting batteries `, err.message);
      next(err);
    }
});

router.get('/', async function(req, res, next) {
  try {
    res.json(await batteries.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting batteries `, err.message);
    next(err);
  }
});
router.get('/:id/columns', async function(req, res, next) {
  try {
    res.json(await columns.getBatt(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting batteries `, err.message);
    next(err);
  }
});


module.exports = router;