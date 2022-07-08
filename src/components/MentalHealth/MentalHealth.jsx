import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';  
import './MentalHealth.css';


function MentalHealth(){
    const dispatch = useDispatch();

  useEffect(() =>{
    dispatch({
        type: "FETCH_CATEGORY_CONTENT"
    })
  },[])
    

    return(
        <>
         <h1>Mental Health </h1>
            <div>
                <Link to="/EatingDissorder">
                    <button>Eating Dissorder</button>
                </Link>
                <Link to="/Addiction">
                    <button> Addiction</button>
                </Link>
                <Link to="/SuicideAndDepression">
                    <button> Suicide & Depression</button>
                </Link>
            </div>
            <div>
                <p>
                image will go here
                </p>
            </div>
            <div>
                <Link to="/user">
                    <button>Go home</button>
                </Link>
            </div>
        </>
    )
}

export default MentalHealth;