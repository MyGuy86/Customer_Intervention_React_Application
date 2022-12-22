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

router.post('/new', async function(req, res, next) {
  try {
    res.json(await interventions.New(req.query));
  } catch (err) {
    console.error(`Error while posting interventions `, err.message);
    next(err);
  }
});

router.patch('/update/:id', async function(req, res, next) {
  try {
    res.json(await interventions.UpdateStatus(req.params.id, req.query, req.params.status));
  } catch (err) {
    console.error(`Error while patching interventions `, err.message);
    next(err);
  }
});

router.delete('/delete/:id', async function(req, res, next) {
  try {
    res.json(await interventions.Delete(req.params.id, req.query));
  } catch (err) {
    console.error(`Error while getting interventions `, err.message);
    next(err);
  }
});


module.exports = router;