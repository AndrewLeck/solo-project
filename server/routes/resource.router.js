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

router.post('/', (req, res) => {
  const sqlQuery = `
INSERT INTO "resources" 
	("name", "location", "phone", "link", "sub_category_id")
VALUES
	($1, $2, $3, $4, $5);
  `;

  const queryParams = [
    req.body.name,
    req.body.location,
    req.body.phone,
    req.body.link,
    req.body.sub_category_id
  ]

console.log('what POSTING?', queryParams)

});

module.exports = router;