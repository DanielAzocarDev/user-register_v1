import { createContext,useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const getUser = (data) => {
    setUser(data)
    isLogged(data)
  }

  const isLogged = (data) =>{
    data ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }


  return (
    <AuthContext.Provider value={{user, getUser, isLoggedIn, isLogged}}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContextProvider