const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// THis route allows me to fetch the data fro the CategoryId table( Mental Health, Public Assistance, Educational Assistance, General Health)
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

module.exports = router;