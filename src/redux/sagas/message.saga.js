import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addMessage(action){
    try{
        yield axios.post('/api/messages', action.payload);
        console.log('what is my payload:', action.payload)
    }
    catch(error){
        console.log('error',error)
    }

}

function* messageSaga() {
    yield takeLatest('ADD_MESSAGE', addMessage);
  }

  export default messageSaga;