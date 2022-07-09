const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
  const queryText=`
  SELECT * FROM "resources";
  `;
  
  pool.query(queryText)
  .then((results) =>{
      console.log('Getting the resources', results.rows)
      res.send(results.rows)
  })
  .catch((err) =>{
      console.error('Failed to GET the data', err)
  })

});



module.exports = router;