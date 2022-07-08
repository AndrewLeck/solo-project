import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';  
import './MentalHealth.css';


function MentalHealth(){
    const category = useSelector((store) => store.categoryContent);
    const dispatch = useDispatch();

  useEffect(() =>{
    dispatch({
        type: "FETCH_CATEGORY_CONTENT"
    })
  },[])
    

    return(
        <>
         <h1> {category[0] && category[0].name} </h1>
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
                {category[0] && category[0].home_page_content}
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