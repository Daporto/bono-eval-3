const express = require('express');
const BaseSerializer = require('../serializers/BaseSerializer');
const ApiError = require('../utils/ApiError');


const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // throw new ApiError('Bad request', 400);
  res.send(new BaseSerializer(200, 'My users route', null).toJSON());
});

module.exports = router;
