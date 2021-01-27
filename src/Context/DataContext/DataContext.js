import { createContext,useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {
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
    <DataContext.Provider value={{user, getUser, isLoggedIn, isLogged}}>
      {children}
    </DataContext.Provider>
  )

}

export default DataContextProvider