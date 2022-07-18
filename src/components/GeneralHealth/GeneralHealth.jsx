import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'; 

function GeneralHealth(){

    const dispatch = useDispatch();
    const category = useSelector((store) => store.categoryContent);
    useEffect(() =>{
      dispatch({
          type: "FETCH_CATEGORY_CONTENT"
      })
    },[])

    return(
        <>
        <h1>{category[3] && category[3].name}</h1>
                <div>
                    <Link to="/DrAndHospital">
                        <button className="tablink"> Dr./Hospital </button>
                    </Link>
                    <Link to="/SexualEducation">
                        <button className="tablink"> Sexual Education </button>
                    </Link>
                    <Link to="/Covid-19">
                        <button className="tablink"> Covid-19</button>
                    </Link>
                </div>
                <br></br>
                <br></br>
            <div>
                <p>
                    {category[3] && category[3].home_page_content}
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

export default GeneralHealth;