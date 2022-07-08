const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    
  const queryText=`
  SELECT * FROM "categoryId";
  `;
  
  pool.query(queryText)
  .then((results) => {
      console.log('We got the data!', results.rows)
      res.send(results.rows)
  })
  .catch((err) => {
      console.log('Failed to GET the data', err)
      res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;