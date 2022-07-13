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

function* addNewResource(action){
try{
        yield axios.post('/api/resource', action.payload)
        .then(
            yield put({
                type:'FETCH_RESOURCES'
            })
        )
       
    }
catch(error){
        console.error('Failed to GET resources in sagas', error)
    }
}

function* deleteItemById(action){
    try{
        console.log('payload is', action.payload)
        yield axios.delete(`/api/resource/${action.payload}`)
        .then(
            yield put({
                type:'FETCH_RESOURCES'
            })
        )
    }
    catch(error){
        console.error('Failed to DELETE', error)
    }
}

function* resourceSaga(){
    yield takeLatest('FETCH_RESOURCES', fetchResource); 
    yield takeLatest('ADD_NEW_RESOURCES', addNewResource);
    yield takeLatest('DELETE_ITEM_BY_ID', deleteItemById) 
}

export default resourceSaga;