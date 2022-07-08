import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* addMessage(action){
    try{
        yield axios.post('/api/messages', action.payload);
       
    }
    catch(error){
        console.log('error',error)
    }

}

function* messageSaga() {
    yield takeLatest('ADD_MESSAGE', addMessage);
  }

  export default messageSaga;