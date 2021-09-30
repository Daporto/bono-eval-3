const express = require('express');
const ApiError = require('../utils/ApiError');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // throw new ApiError('Bad request', 400);
  res.send({ data: 'my users route' });
});

module.exports = router;
