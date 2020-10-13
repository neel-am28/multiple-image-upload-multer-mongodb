const express = require('express');
const router = express.Router();

const imagesController = require('../controllers/imagesController');
const upload = require('../middleware/upload');

router.get('/', imagesController.index);
router.post('/', upload.array('photo'), imagesController.post);

module.exports = router;