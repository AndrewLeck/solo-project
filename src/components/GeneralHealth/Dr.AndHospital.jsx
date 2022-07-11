import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function DrAndHospital(){

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
         <h1>Dr./Hospital</h1>
                <div>
                    <Link to="/DrAndHospital">
                        <button> Dr./Hospital </button>
                    </Link>
                    <Link to="/SexualEducation">
                        <button> Sexual Education </button>
                    </Link>
                    <Link to="/Covid-19">
                        <button> Covid-19</button>
                    </Link>
                </div>
            <div>
                <header> Name </header>
              <ul>
                 {resources.map((resource) => {
                      if( resource.sub_category_id === 10){
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
                     if( resource.sub_category_id === 10){
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
                <Link to="/GeneralHealth">
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default DrAndHospital;