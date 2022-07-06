import './MentalHealth.css';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
  } from 'react-router-dom';
  import { Link } from 'react-router-dom';
  
  

function MentalHealth(){
    // function openTitle(titleName, elmnt, color) {
    //     // Hide all elements with class="tabcontent" by default */
    //     var i, tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < tabcontent.length; i++) {
    //       tabcontent[i].style.display = "none";
    //     }
      
    //     // Remove the background color of all tablinks/buttons
    //     tablinks = document.getElementsByClassName("tablink");
    //     for (i = 0; i < tablinks.length; i++) {
    //       tablinks[i].style.backgroundColor = "";
    //     }
      
    //     // Show the specific tab content
    //     document.getElementById(titleName).style.display = "block";
      
    //     // Add the specific color to the button used to open the tab content
    //     elmnt.style.backgroundColor = color;
    //   }
      
    //   // Get the element with id="defaultOpen" and click on it
    // //   document.getElementById("defaultOpen").click();
  
     

    return(
        <>
         <h1>Mental Health </h1>
        {/* <div id='EatingDissorder' className='tabecontent'>
            <h3> Eating Dissorders </h3>
        </div>
        <div>
            <h3> Addiction </h3>
        </div>
        <div>
            <h3> Suicide & Depression </h3>
        </div> */}
            <div>
                <Link to="/EatingDissorder" >
                 <button className='tablink'>Eating Dissorder</button>
                </Link>
               
                <button className='tablink'> Addiction</button>
                <button className='tablink'> Suicide & Depression</button>
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

export default MentalHealth;