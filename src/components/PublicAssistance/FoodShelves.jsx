import { Link } from 'react-router-dom';

function FoodShelves(){
 
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
                  <li>
                      This is where I will map through my array and append the name
                  </li>
                  <li>
                      This is where I will map through my array and append the name
                  </li>
                  <li>
                      This is where I will map through my array and append the name
                  </li>
                  <li>
                      This is where I will map through my array and append the name
                  </li>
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
                <button>Go Back</button>
            </div>
        </>
    )
}

export default FoodShelves;