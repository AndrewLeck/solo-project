import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

//this function takis in the action call "FETCH_CATEGORY_CONTENT" and sends a GET request to the server
function* fetchCategoryContent(action){
    console.log('what is this:', action);
    try{
        const res = yield axios.get('/api/categoryContent', action) 

    }
    catch(err){
        console.log('Failed to GET category content in sagas', err);
    }
}

function* categoryContentSaga() {
    yield takeLatest('FETCH_CATEGORY_CONTENT', fetchCategoryContent);
}

export default categoryContentSaga;