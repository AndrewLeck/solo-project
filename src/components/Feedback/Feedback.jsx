import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import './Feedback.css'
import Swal from 'sweetalert2';
function Feedback(){

const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [name, setName] = useState('');
const dispatch = useDispatch();

const sendMessageToServer = (event) => {
    
    event.preventDefault();
    dispatch({
        type:'ADD_MESSAGE',
        payload:{
            email,
            message,
            name
        }
    })
    //This will clear the input fields on submit of the form( but it does not work yet need to fix later)
    event.target.reset();
};

const thanksForFeedBack = () =>{
  Swal.fire(
    'Success!',
    'Thanks for the feedback :)',
    'success'
  )  
}

    return(
        <>
            <h1>Want us to add anything? Give us your suggestion down below</h1>
                <form onSubmit={sendMessageToServer}>
                    <div className='textInput'>
                        <span>Name:</span>
                        <input
                        onChange={(event) => setName(event.target.value)}
                        type="text" 
                        placeholder="Name" 
                        />
                        <span>Email:</span>
                        <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="text" 
                        placeholder="Email" 
                        />
                    </div>
                        <header>Message:</header>
                        <div>   
                            <p>
                                {/* will have to expand this imput box to make it bigger */}
                                <textarea 
                                onChange={(event) => setMessage(event.target.value)}
                                type="text" 
                                placeholder="Users will be able to type messages Here!"
                                 />
                            </p>
                        </div>
                            <div className='SubmitBtn'>
                                <input 
                                onClick={thanksForFeedBack}
                                className='textInput'
                                type="submit"
                                />
                            </div>
                </form>
                            <div className='GoHome'>
                                <Link to="/user">
                                    <button>Go Home</button>
                                </Link>
                            </div>
        </>
    )
}

export default Feedback;
