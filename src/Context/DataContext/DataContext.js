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

  const deleteItem = (userId, item) => {

    // firestore.doc(`/users/${userId}/`).collection('stock').doc(item.id).delete().then(() => {
    //   console.log(`Document ${item.title}  successfully deleted!`);
    // }).catch((error) => {
    //   console.error("Error removing document: ", error);
    // });
    // firestore.doc(`/users/${userId}/`).collection('stock').where("id", "==", item.id).get()
    //   .then(querySnapshot => querySnapshot.docs[0].ref.delete())

    const collRef = firestore.doc(`/users/${userId}/`).collection('stock')

    collRef.doc(item.id).delete()
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
    <DataContext.Provider value={{ items, addItem, deleteItem, getInventory }}>
      {children}
    </DataContext.Provider>
  )

}

export default DataContextProvider