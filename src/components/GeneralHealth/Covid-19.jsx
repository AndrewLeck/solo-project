import { Link } from 'react-router-dom';

function Covid(){
 
    return(
        <>
         <h1>Covid-19</h1>
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
                <Link to="/GeneralHealth">
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default Covid;