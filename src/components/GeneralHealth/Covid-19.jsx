import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Covid(){

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
         <h1>Covid-19</h1>
                <div class="subHeader">
                    <div>
                    <Link to="/DrAndHospital">
                        <button className="tablink"> Dr./Hospital </button>
                    </Link>
                    </div>
                    <div>
                    <Link to="/SexualEducation">
                        <button className="tablink"> Sexual Education </button>
                    </Link>
                    </div>
                    <div>
                    <Link to="/Covid-19">
                        <button className="tablink"> Covid-19</button>
                    </Link>
                    </div>
                </div>
                <container className='center'> 
            <div>
                <header> Name </header>
              <ul>
                  {resources.map((resource) => {
                      if( resource.sub_category_id === 12){
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
                     if( resource.sub_category_id === 12){
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
            </container>
            <div>
                <Link to="/GeneralHealth">
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default Covid;