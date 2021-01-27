import { useContext, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase.config';
import { AuthContext } from '../../Context/AuthContext/AuthContext'

const Navbar = ({ history }) => {

  const {isLoggedIn, getUser} = useContext(AuthContext)

  // console.log(isLoggedIn)
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

          {!isLoggedIn ? (
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
                    getUser(null)
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