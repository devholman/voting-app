import React from 'react';
import ContestantSignUpForm from './contestant-signUp';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

const VoteChoice = () => (
    <Router>
        <div>
            <button>
                <Link to="/vote">Vote</Link>
            </button>
            <button>
                <Link to="/contestantSignUp">Become a Contestant</Link>
            </button>
            <Route path="/contestantSignUp" component={ContestantSignUpForm} />
        </div>
    </Router>
);

export default VoteChoice;