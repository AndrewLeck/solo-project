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
        <p>This about page is for anyone to read!</p>
        <p> Resourceful was created to help provide equal oppourtunities for all</p>
      </div>
    </div>
  );
}

export default AboutPage;
