import { Link } from 'react-router-dom';
function Addiction(){
 
    return(
        <>
         <h1>Addiction </h1>
            <div>
                <Link to="/EatingDissorder">
                    <button>Eating Dissorder</button>
                </Link>
                <button> Addiction</button>
                <button className='tablink'> Suicide & Depression</button>
            </div>
            <div>
                <header> Name </header>
              <ul>
                  <li>
                      This is where I will map throug my array and append the name
                  </li>
                  <li>
                      This is where I will map throug my array and append the name
                  </li>
                  <li>
                      This is where I will map throug my array and append the name
                  </li>
                  <li>
                      This is where I will map throug my array and append the name
                  </li>
              </ul>
            </div>
            <div>
            <header>Additional Resources</header>
              <ul>
                  <li>
                      This is where I will map throug my array and append Additional Resources
                  </li>
                  <li>
                      This is where I will map throug my array and append Additional Resources
                  </li>
                  <li>
                      This is where I will map throug my array and append Additional Resources
                  </li>
                  <li>
                      This is where I will map throug my array and append Additional Resources
                  </li>
              </ul>
            </div>
            <div>
                <button>Go Back</button>
            </div>
        </>
    )
}

export default Addiction;