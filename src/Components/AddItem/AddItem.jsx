import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid'

import { DataContext } from '../../Context/DataContext/DataContext';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const AddItem = ({ history }) => {

  const { addItem } = useContext(DataContext)
  const { user } = useContext(AuthContext)

  const [data, setData] = useState({
    title: "",
    price: "",
    cost: "",
    quantity: "",
  })


  const formChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
      id: uuid(),
    })
    // console.log(data)
  }

  const formSubmit = (e) => {
    e.preventDefault()

    const userId = user.uid
    addItem(userId, data)
    // addItem(userId)
    // console.log(userId)
    setData({
      title: "",
      price: "",
      cost: "",
      quantity: "",
    })

    history.push("/dashboard")
  }

  // console.log(items)

  return (
    <form className="w-80 text-white bg-green-400 px-2 shadow-md" onSubmit={formSubmit}>
      <h2 className="text-center text-2xl font-black m-7">Add Your Products!!</h2>
      <div className=" pb-6 ">
        <label className="block" htmlFor="title">Title</label>
        <input className=" w-full text-black px-2" type="text" name="title" id="title" value={data.title} onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="price">Price</label>
        <input className=" w-full text-black px-2" type="number" name="price" id="price" value={data.price} onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="cost">Cost</label>
        <input className=" w-full text-black px-2" type="number" name="cost" id="cost" value={data.cost} onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="quantity">Quantity</label>
        <input className=" w-full text-black px-2" type="number" name="quantity" id="quantity" value={data.quantity} onChange={formChange} />
      </div>

      <input className="text-white text-lg font-semibold bg-green-500 hover:bg-green-700 px-8 py-2 my-3" type="submit" />

    </form>
  );
}

export default AddItem;