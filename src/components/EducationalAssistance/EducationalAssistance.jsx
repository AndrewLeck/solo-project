import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'; 

function EducationalAssistance(){

    const dispatch = useDispatch();
    const category = useSelector((store) => store.categoryContent);
    useEffect(() =>{
      dispatch({
          type: "FETCH_CATEGORY_CONTENT"
      })
    },[])
    
    return(
        <>
        <h1>{category[2] && category[2].name}</h1>
        <div class="subHeader">
                <div>
                    <Link to="/Library">
                        <button className="tablink"> Library's </button>
                    </Link>
                </div>
                <div>
                    <Link to="/PublicSchools">
                        <button className="tablink"> Public Schools </button>
                    </Link>
                </div>
                <div>
                    <Link to="/TutoringServices">
                        <button className="tablink"> Tutoring Services</button>
                    </Link>
                </div>
        </div>
            <div>
                <p>
                    {category[2] && category[2].home_page_content}
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

export default EducationalAssistance;