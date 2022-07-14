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

pool.query(sqlQuery, queryParams)
.then(() => {
  console.log('Post add success!')
  res.sendStatus(200)
})
.catch((error) => {
  console.error('POST add new resource failed', error)
  
})

});

router.delete('/:id',(req, res) => {

  
 const sqlText =`
 DELETE FROM resources
 WHERE id = $1
 `;

const sqlParams = [
req.params.id
]
console.log('delete params are:', sqlParams)

pool.query(sqlText, sqlParams)
.then(() => {
  console.log('Delete sucess')
  res.sendStatus(200)
})
.catch((error) => {
  console.log('Failed to delete', error)
})


})

router.put('/:id', (req, res) => {
  const sqlText = `
  UPDATE resources
	SET  name = $1, location = $2, phone = $3, link = $4
	WHERE id = $5;
  `;
  
  const sqlParams = [
    req.body.name,
    req.body.location,
    req.body.phone,
    req.body.link,
    req.params.id
  ]

  console.log('I am updating:', sqlParams);

  pool.query(sqlText, sqlParams)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((error) => {
    console.error('Failed to update database in server', error)
    res.sendStatus(500)
  })

})
module.exports = router;