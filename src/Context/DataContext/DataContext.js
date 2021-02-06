import { createContext, useState } from 'react';

import { firestore } from '../../firebase.config';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

  const [items, setItems] = useState([])

  const addItem = (userId, data) => {
    setItems([...items, data])

    firestore.doc(`/users/${userId}`).collection("stock").doc(`${data.id}`).set(data)

    // console.log(userId, "user id from DataContext")
  }

  const getInventory = (userId) => {
    // console.log(`this is the inventory of ${userId}`)
    const collRef = firestore.doc(`/users/${userId}/`).collection('stock')

    return collRef.get()
      .then((querySnapshot) => {
        const userStock = []

        querySnapshot.forEach(doc => {
          const fetchedItem = {
            id: doc.id,
            ...doc.data()
          }
          userStock.push(fetchedItem)
        })
        setItems(userStock)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <DataContext.Provider value={{ items, addItem, getInventory }}>
      {children}
    </DataContext.Provider>
  )

}

export default DataContextProvider