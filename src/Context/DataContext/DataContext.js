import { createContext, useState } from 'react';

import { firestore } from '../../firebase.config';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = (userId, data) => {
    setItems([...items, data])

    firestore.doc(`/users/${userId}`).set({
      inventory: [...items, data]
    })

    console.log(userId, "user id from DataContext")
  }

  const getInventory = (id) => {


    console.log(`this is the inventory of ${id}`)
  }
  return (
    <DataContext.Provider value={{ items, addItem }}>
      {children}
    </DataContext.Provider>
  )

}

export default DataContextProvider