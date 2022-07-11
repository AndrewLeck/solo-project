import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ClothingOptions(){

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
         <h1>Clothing Options</h1>
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
                  
              </ul>
            </div>
            <div>
            <header>Additional Resources</header>
              <ul>
                  <li>
                      This is where I will map through my array and append Additional Resources
                  </li>
                  <li>
                      This is where I will map through my array and append Additional Resources
                  </li>
                  <li>
                      This is where I will map through my array and append Additional Resources
                  </li>
                  <li>
                      This is where I will map through my array and append Additional Resources
                  </li>
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

export default ClothingOptions;