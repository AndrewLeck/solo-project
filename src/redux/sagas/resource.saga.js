import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* fetchResource(){
    try{
        const res = yield axios.get('/api/resource')
        yield put({
            type:'SET_RESOURCES',
            payload: res.data
        })
    }
    catch(err){
        console.error('Failed to GET resources in sagas', err)
    }
       

}

function* resourceSaga(){
    yield takeLatest('FETCH_RESOURCES', fetchResource)
}

export default resourceSaga;