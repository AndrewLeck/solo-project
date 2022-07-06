import './MentalHealth.css';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
  } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  
  

function MentalHealth(){
     
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
                <Link to="Suicid&Depression">
                    <button> Suicide & Depression</button>
                </Link>
            </div>
            <div>
                <p>
                image will go here
                </p>
            </div>
            <div>
                <button>Go home</button>
            </div>
        </>
    )
}

export default MentalHealth;