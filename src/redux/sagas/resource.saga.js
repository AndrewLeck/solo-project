import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* fetchResource(){
    console.log('in fetch resource')
    try{
        const res = yield axios.get('/api/resource')
        yield put({
            type:'SET_RESOURCES',
            payload: res.data
        })
        console.log('what is res.data', res.data)
    }
    catch(err){
        console.error('Failed to GET resources in sagas', err)
    }
}

function* addNewResource(action){
try{
        yield axios.post('/api/resource', action.payload)
        
            yield put({
                type:'FETCH_RESOURCES'
            })
    
    }
catch(error){
        console.error('Failed to GET resources in sagas', error)
    }
}

function* deleteItemById(action){
    console.log('Delete payload is', action.payload)

    try{
        yield axios.delete(`/api/resource/${action.payload}`)
            yield put({
                type:'FETCH_RESOURCES'
            })
    }
    catch(error){
        console.error('Failed to DELETE', error)
    }
}

function* updateDataRow(action){
    console.log('Update payload is',action.payload.id)
    
    try{
        yield axios.put(`/api/resource/${action.payload.id}`, action.payload)
        yield put({
            type:'FETCH_RESOURCES'
        })
    }
    catch(error){
        console.error('Failed to put(update) in sagas', error)
    }
}

function* resourceSaga(){
    yield takeLatest('FETCH_RESOURCES', fetchResource); 
    yield takeLatest('ADD_NEW_RESOURCES', addNewResource);
    yield takeLatest('DELETE_ITEM_BY_ID', deleteItemById);
    yield takeLatest('UPDATE_DATA_ROW', updateDataRow);
}

export default resourceSaga;