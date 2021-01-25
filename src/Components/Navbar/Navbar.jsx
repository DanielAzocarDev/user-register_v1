import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase.config';

const Navbar = ({ user, history }) => {

  useEffect(() => {
    if (user) {
      console.log("user logged in")
    } else {
      console.log("user logged out")
    }
  }, [user])

  return (
    <nav className="w-screen h-12 bg-white text-green-500 shadow-md">
      <div className="container h-full flex justify-between items-center px-2 mx-auto">
        <h2 className="font-bold">Menu</h2>
        <ul className=" w-48 flex justify-between">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          {!user ? (
            <>
              <li>
                <Link to="/signup">
                  Sign Up
            </Link>
              </li>
              <li>
                <Link to="/signin">
                  Sign In
            </Link>
              </li>
            </>
          )
            :
            (
              <>
                <li>
                  <p to="/signin" onClick={() => {
                    auth.signOut()
                    history.push("/")
                  }}>
                    Sign Out
                </p>
                </li>
              </>
            )}

        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);