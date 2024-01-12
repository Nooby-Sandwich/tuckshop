const express = require('express');
const router = express.Router();

router.post('/foodItems', async (req, res) => {
 try {
 res.send([global.food_items, global.food_category])
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
});

module.exports = router;