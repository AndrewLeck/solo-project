import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//this function takis in the action call "FETCH_CATEGORY_CONTENT" and sends a GET request to the server
function* fetchCategoryContent(){
    try{
        const res = yield axios.get('/api/categoryContent') 
        yield put({
            type:'SET_CATEGORY_CONTENT',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to GET category content in sagas', err);
    }
}

function* categoryContentSaga() {
    yield takeLatest('FETCH_CATEGORY_CONTENT', fetchCategoryContent);
}

export default categoryContentSaga;