import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* fetchCategoryContent(){
    try{
    

    }
    catch(err){
        console.log('Failed to GET category content in sagas', err);
    }
}

function* categoryContentSaga() {
    yield takeLatest('FETCH_CATEGORY_CONTENT', fetchCategoryContent);
}

export default categoryContentSaga;