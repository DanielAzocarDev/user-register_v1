import { useState, useContext } from 'react';

import { DataContext } from '../../Context/DataContext/DataContext';

const AddItem = () => {

  const { items, addItem } = useContext(DataContext)

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
      [name]: value
    })
    // console.log(data)
  }

  const formSubmit = (e) => {
    e.preventDefault()

    const userId = JSON.parse(localStorage.getItem("user")).uid
    addItem(userId, data)
    // console.log(userId)
    setData({
      title: "",
      price: "",
      cost: "",
      quantity: "",
    })
  }

  console.log(items)

  return (
    <form className="w-80 text-white bg-green-400 px-2 shadow-md" onSubmit={formSubmit}>
      <h2 className="text-center text-2xl font-black m-7">Create Your User!</h2>
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