// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { auth } from './firebase.config'

// Pages
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Home from './Pages/Home/Home';

// Components
import Navbar from './Components/Navbar/Navbar';

// Styles
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';

// context auth
import AuthContextProvider from './Context/AuthContext/AuthContext';

function App() {

  return (
    <Router>

      <div className="">
        <AuthContextProvider>

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/dashboard" component={Dashboard} />

          {/* <button onClick={() => auth.signOut()}> Sign Out</button> */}
          {/* user && <button onClick={() => auth.signOut()}> Sign Out</button> */}
        </Switch>
        </AuthContextProvider>
        
      </div>

    </Router>

  );
}

export default App;
