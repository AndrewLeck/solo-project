import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'; 

function PublicAssistance(){
    const dispatch = useDispatch();
    const category = useSelector((store) => store.categoryContent);
    useEffect(() =>{
      dispatch({
          type: "FETCH_CATEGORY_CONTENT"
      })
    },[])

    return(
        <>
            <h1> {category[1] && category[1].name} </h1>
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
                <p>
                {category[1] && category[1].home_page_content}
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

export default PublicAssistance;