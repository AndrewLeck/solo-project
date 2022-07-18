import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h1> About Page </h1>
      <div>
        <p> Resourceful was created to help provide equal oppourtunities for all </p>
        <h3>Technology Used</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>CSS</li>
            <li>PsostreSQL</li>
            <li>Postico</li>
          </ul>
        <p> 
          <h3>Thanks</h3>
          <ul>
            <li>Friends and Family</li>
            <li>Prime Community</li>
            <li>Instrcutor Edan Schwartz</li>
          </ul>

        </p>
        <div>
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQEbj4UrmjxoKg/profile-displayphoto-shrink_200_200/0/1652586735572?e=1663200000&v=beta&t=VcNMmVxI3gfAwmz2eWTYqZssBM8QWElxGVaH4SuQq4A' target="_blank"/>
        </div>
        <span> Connect with me on Linkedin <span></span> Click here 👉🏾 </span><a href='https://www.linkedin.com/in/andrew-leck-4919b7224/'> Linkedin </a>
      </div>
    </div>
  );
}

export default AboutPage;
