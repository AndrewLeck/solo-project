import { Link } from 'react-router-dom';

function EducationalAssistance(){
    return(
        <>

        <h1>Educational Assistance Page</h1>
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
                    image will go here
                </p>
            </div>
            <div>
                <button>Go home</button>
            </div>
        </>
    )
}

export default EducationalAssistance;