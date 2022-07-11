import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Addiction(){

    const resources = useSelector((store) => store.resources);
    const dispatch = useDispatch();

    // on page load run this action call (FETCH_RESOURCES)
    useEffect(() =>{
        dispatch({
            type: "FETCH_RESOURCES"
        })
      },[])

    return(
        <>
         <h1>Addiction </h1>
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
                <header> Name </header>
              <ul>
                  {resources.map((resoure) =>{
                   if( resoure.sub_category_id === 2){
                       return(
                           <li key={resource.id}>
                               {resources.name}
                           </li>
                       )
                   }   
                  })}
                  
              </ul>
            </div>
            <div>
            <header>Additional Resources</header>
              <ul>
                 
              </ul>
            </div>
            <div>
                <Link to='/MentalHealth'>
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default Addiction;