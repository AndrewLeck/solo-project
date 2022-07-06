import { Link } from 'react-router-dom';

function GeneralHealth(){
    return(
        <>
        <h1>General Health Page</h1>
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

export default GeneralHealth;