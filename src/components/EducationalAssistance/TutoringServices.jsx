import { Link } from 'react-router-dom';

function TutoringServices(){
 
    return(
        <>
         <h1>Tutoring Services </h1>
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
                <Link to="/EducationalAssistance">
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default TutoringServices;