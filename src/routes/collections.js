const express = require('express');
const router = express.Router();

const collectionController = require('../app/controllers/CollectionController');

router.get('/all', collectionController.all);
router.get('/tops', collectionController.tops);
router.get('/bottoms', collectionController.bottoms);
router.get('/outerwear', collectionController.outerwear);
router.get('/footwear', collectionController.footwear);
router.get('/hat', collectionController.hat);
router.get('/bags', collectionController.bags);


module.exports = router;