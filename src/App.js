import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase.config'

// Pages
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Home from './Pages/Home/Home';

// Components
import Navbar from './Components/Navbar/Navbar';

// Styles
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        console.log("this is the user")
      } else {
        console.log("There is no active user")
      }
    })

  }, [user])

  console.log(user)

  return (
    <Router>

      <div className="">
        <Navbar user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/dashboard" component={() => <Dashboard user={user}/>} />

          {/* <button onClick={() => auth.signOut()}> Sign Out</button> */}
          {/* user && <button onClick={() => auth.signOut()}> Sign Out</button> */}
        </Switch>
      </div>

    </Router>

  );
}

export default App;
