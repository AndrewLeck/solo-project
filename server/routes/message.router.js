const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This will post the users message from the review from to the database where
// The developers will have access to read.
router.post('/', (req, res) => {
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