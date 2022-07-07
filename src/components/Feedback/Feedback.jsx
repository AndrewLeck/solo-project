import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
function Feedback(){

const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [name, setName] = useState('');
const dispatch = useDispatch();


const sendMessageToServer = (event) => {
    event.preventDefault();
    // console.log('message sent')
    // console.log('what is my email:', email)
    // console.log('What is my Message:',message)
    dispatch({
        type:'ADD_MESSAGE',
        payload:{
            email,
            message,
            name
            
        }
    })
};

    return(
        <>
            <h1>Want us to add anything? Give us your suggestion down below.</h1>
                <form onSubmit={sendMessageToServer}>
                    <div>
                        <input
                        onChange={(event) => setName(event.target.value)}
                        type="text" 
                        placeholder="Name" 
                        />
                        <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="text" 
                        placeholder="Email" 
                        />
                    </div>
                        <header>Message:</header>
                            <p>
                                {/* will have to expand this imput box to make it bigger */}
                                <input 
                                onChange={(event) => setMessage(event.target.value)}
                                tpye="text" 
                                placeholder="Users will be able to type messages Here!"
                                 />
                            </p>
                            <div>
                                <input 
                                type="submit"
                                />
                            </div>
                </form>
                            <div>
                                <Link to="/user">
                                    <button>Go Home</button>
                                </Link>
                            </div>
        </>
    )
}

export default Feedback;
