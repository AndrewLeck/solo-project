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
            <div class="subHeader">
                <div>
                    <Link to="/FoodShelves">
                        <button class="tabLink"> Food Shelves </button>
                    </Link>
                </div>
                <div>
                    <Link to="/HomelessShelters">
                        <button class="tabLink"> Homeless Shelters </button>
                    </Link>
                </div>
                <div>
                    <Link to="/ClothingOptions">
                        <button class="tabLink"> Clothing Options </button>
                    </Link>
                </div>
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