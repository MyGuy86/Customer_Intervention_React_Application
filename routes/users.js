const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
/* GET elevator by ID. */
// http://localhost:3000/users/5
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await users.getSingle(req.params.id, req.query));
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
});

router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getAll(req.query));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});


module.exports = router;