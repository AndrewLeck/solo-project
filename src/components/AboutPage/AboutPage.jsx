import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="containerAbout">
      <h1> About Page </h1>
      <div>
        <p> Resourceful was created to help provide equal oppourtunities for all </p>
        <h3>Technology Used</h3>
          <ul>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Ajax</li>
            <li>Sweet Alert 2</li>
            <li>CSS</li>
            <li>PsostreSQL</li>
            <li>Postico</li>
          </ul>
          <div>
            <h3> What's Next </h3>
            Going to implement google places api to allow people to search for any place.
          </div>
        <div> 
          <h3>Thanks</h3>
          <ul>
            <li>Friends and Family</li>
            <li>Prime Community</li>
            <li>Instrcutor Edan Schwartz</li>
          </ul>

        </div>
        <div>
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQEbj4UrmjxoKg/profile-displayphoto-shrink_200_200/0/1652586735572?e=1663200000&v=beta&t=VcNMmVxI3gfAwmz2eWTYqZssBM8QWElxGVaH4SuQq4A' target="_blank"/>
        </div>
        <span> Connect with me on Linkedin <span></span> Click here 👉🏾 </span><a href='https://www.linkedin.com/in/andrew-leck-4919b7224/'> Linkedin </a>
      </div>
    </div>
  );
}

export default AboutPage;
