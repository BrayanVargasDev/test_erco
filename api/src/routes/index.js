const { Router } = require('express');
const router = Router();

const { getCountries, getStatesByIdCountry, getCitiesByIdState } = require('../controlers/index.controller');


router.get('/countries', getCountries);
router.get('/states/:idCountry', getStatesByIdCountry);
router.get('/cities/:idState', getCitiesByIdState);


module.exports = router;
