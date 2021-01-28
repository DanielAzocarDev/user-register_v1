import { createContext,useState } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {
  const [items, setItems] = useState([])

  const addItem = (data) => {
    setItems(...items, data)
  }


  return (
    <DataContext.Provider value={{items, addItem}}>
      {children}
    </DataContext.Provider>
  )

}

export default DataContextProvider