var express = require('express');
var router = express.Router();
var artistsController = require('../controllers/artists.js');
var managersController = require('../controllers/managers.js');
const songsController = require('../controllers/songs.js');

//Artist Routes
  
// index
router.get('/api/artists', artistsController.index);

// create
router.post('/api/artists', artistsController.create);

// show
router.get('/api/artists/:id', artistsController.show);

// update
router.put('/api/artists/:id', artistsController.update);

// destroy
router.delete('/api/artists/:id', artistsController.destroy);

//Manager Routes

// index
router.get('/api/managers', managersController.index);

// create
router.post('/api/managers', managersController.create);

// show
router.get('/api/managers/:id', managersController.show);

// update
router.put('/api/managers/:id', managersController.update);

// destroy
router.delete('/api/managers/:id', managersController.destroy);

//Song Routes
router.get('/api/songs', songsController.index);
router.post('/api/songs', songsController.create);
router.get('/api/songs/:id', songsController.show);
router.put('/api/songs/:id', songsController.update);
router.delete('/api/songs/:id', songsController.destroy);


module.exports = router;