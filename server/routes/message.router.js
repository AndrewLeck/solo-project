const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
    const queryText= `
INSERT INTO "messages" 
	("name", "email", "message")
VALUES
	($1, $2, $3 );
    `;
    const queryParams = [
        req.body.name,
        req.body.email,
        req.body.message
    ]
    console.log('What am I getting back', queryParams);
    pool.query(queryText, queryParams)
    .then(() =>{
        console.log('Post success!')
    })
    .catch((err) => {
        console.log('Post failed:', err)
    })

});

module.exports = router;