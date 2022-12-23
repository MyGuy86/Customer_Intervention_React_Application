const express = require('express');
const router = express.Router();
const customers = require('../controllers/customers');
/* GET elevator by ID. */
// http://localhost:3000/customers/5
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await customers.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting customers `, err.message);
      next(err);
    }
});

router.get('/', async function(req, res, next) {
  try {
    res.json(await customers.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting customers `, err.message);
    next(err);
  }
});

router.post('/new', async function(req, res, next) {
  try {
    res.json(await customers.New(req.query));
  } catch (err) {
    console.error(`Error making customer `, err.message);
    next(err);
  }
});



module.exports = router;