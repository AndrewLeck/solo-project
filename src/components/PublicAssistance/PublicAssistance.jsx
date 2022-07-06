import { Link } from 'react-router-dom';
function PublicAssistance(){
    return(
        <>
            <h1>Public Assistance Page</h1>
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
                image will go here
                </p>
            </div>
            <div>
                <button>Go home</button>
            </div>
        </>
    )
}

export default PublicAssistance;