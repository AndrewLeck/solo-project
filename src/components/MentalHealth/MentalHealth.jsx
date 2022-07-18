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
         <div className='subHeader'>
                <div id='eatingDissorder'>
                    <Link to="/EatingDissorder">
                        <button className="tablink"  >Eating Dissorder</button>
                    </Link>
                </div>
                <div id='Addiction'>
                    <Link to="/Addiction">
                        <button className="tablink" > Addiction</button>
                    </Link>
                </div>
                <div id='SuicideAndDepression'>
                    <Link to="/SuicideAndDepression">
                        <button className="tablink"> Suicide & Depression</button>
                    </Link>
                </div>
        </div>
        <div id='defaultOpen'>
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