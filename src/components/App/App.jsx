import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import MentalHealth from '../MentalHealth/MentalHealth';
import PublicAssistance from '../PublicAssistance/PublicAssistance';
import EducationalAssistance from '../EducationalAssistance/EducationalAssistance';
import GeneralHealth from '../GeneralHealth/GeneralHealth';
import EatingDissorder from '../MentalHealth/EatingDissorder';
import Addiction from '../MentalHealth/Addiction';
import SuicideAndDepression from '../MentalHealth/Suicide&Depression';
import FoodShelves from '../PublicAssistance/FoodShelves';
import HomelessShelters from '../PublicAssistance/HomelessShelters';
import ClothingOptions from '../PublicAssistance/ClothingOptions';
import Library from '../EducationalAssistance/Library\'s';
import PublicSchools from '../EducationalAssistance/PublicSchools';
import TutoringServices from '../EducationalAssistance/TutoringServices';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/MentalHealth"
          >
            <MentalHealth />
          </ProtectedRoute>
          
          <ProtectedRoute
          exact
          path="/PublicAssistance"
          >
            <PublicAssistance />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/EducationalAssistance"
          >
            <EducationalAssistance />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/GeneralHealth"
          >
            <GeneralHealth />
          </ProtectedRoute>

          <ProtectedRoute
          exact
          path="/EatingDissorder"
          >
            <EatingDissorder />
          </ProtectedRoute>

            <ProtectedRoute
            exact
            path='/Addiction'
            >
              <Addiction />
            </ProtectedRoute>

            <ProtectedRoute
            exact
            path="/SuicideAndDepression"
            >
              <SuicideAndDepression />
            </ProtectedRoute>

            <ProtectedRoute
            exact
            path="/FoodShelves"
            >
              <FoodShelves />
            </ProtectedRoute>

            <ProtectedRoute
            exact
            path="/HomelessShelters"
            >
              <HomelessShelters />
            </ProtectedRoute>

            <ProtectedRoute
            exact
            path="/ClothingOptions"
            >
              <ClothingOptions />
            </ProtectedRoute>
            <ProtectedRoute
            exact
            path="/Library"
            >
              <Library />
            </ProtectedRoute>

            <ProtectedRoute
            exact
            path="/PublicSchools"
            >
              <PublicSchools />
            </ProtectedRoute>
            <ProtectedRoute
            exact
            path="/TutoringServices"
            >
              <TutoringServices />
            </ProtectedRoute>
          
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />

            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
