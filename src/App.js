// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { auth } from './firebase.config'

// Pages
import Home from './Pages/Home/Home';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import AddItemPage from './Pages/AddItemPage/AddItemPage';

// Components
import Navbar from './Components/Navbar/Navbar';

// Styles
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';

// context auth
import AuthContextProvider from './Context/AuthContext/AuthContext';
import DataContextProvider from './Context/DataContext/DataContext';

function App() {

  return (
    <Router>

      <div className="">
        <DataContextProvider>
          <AuthContextProvider>

            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/signin" component={SignInPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/additem" component={AddItemPage} />

              {/* <button onClick={() => auth.signOut()}> Sign Out</button> */}
              {/* user && <button onClick={() => auth.signOut()}> Sign Out</button> */}
            </Switch>

          </AuthContextProvider>
        </DataContextProvider>


      </div>

    </Router>

  );
}

export default App;
