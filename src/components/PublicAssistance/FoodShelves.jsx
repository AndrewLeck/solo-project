import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function FoodShelves(){

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
         <h1>Food Shelves</h1>
                <div>
                    <Link to="/FoodShelves">
                        <button> Food Shelves </button>
                    </Link>
                    <Link to="/HomelessShelters">
                        <button> Homeless Shelters </button>
                    </Link>
                    <Link to="/ClothingOptions">
                        <button> Clothing Options </button>
                    </Link>
                </div>
            <div>
                <header> Name </header>
              <ul>
              {resources.map((resource) => {
                      if( resource.sub_category_id === 4){
                        return(
                            <li key={resource.id}>
                                {resource.name}
                            </li>
                        )
                      } 
                  })}
              </ul>
            </div>
            <div>
            <header>Additional Resources</header>
              <ul>
              {resources.map((resource) => {
                     if( resource.sub_category_id === 4){
                        return(
                            <li key={resource.id}>
                               <div>
                                   Address: {resource.location}
                               </div>
                               <div>
                                    Phone: {resource.phone}
                               </div>                
                               <div>
                                   link: <a href={resource.link} target="_blank">{resource.link}</a>
                               </div>
                            </li>
                        )
                     }
                 })}
              </ul>
            </div>
            <div>
                <Link to="/PublicAssistance">
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default FoodShelves;