import { createContext, useState, useEffect } from 'react';

import { auth } from '../../firebase.config';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    // const localUser = JSON.parse(localStorage.getItem("user"))
    // setUser(localUser)
    // !user ? setIsLoggedIn(false) : setIsLoggedIn(true)

    return auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      setUser(authUser)
    })
  }, [])

  const getUser = (data) => {

    // localStorage.setItem("user", JSON.stringify(data))

    // const localUser = localStorage.getItem("user")
    setUser(data)
    // isLogged(data)
  }



  // const isLogged = (data) => {
  //   data ? setIsLoggedIn(true) : setIsLoggedIn(false)
  // }


  return (
    <AuthContext.Provider value={{ user, getUser }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider