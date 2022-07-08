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
                <div>
                    <Link to="/Library">
                        <button> Library's </button>
                    </Link>
                    <Link to="/PublicSchools">
                        <button> Public Schools </button>
                    </Link>
                    <Link to="/TutoringServices">
                        <button> Tutoring Services</button>
                    </Link>
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