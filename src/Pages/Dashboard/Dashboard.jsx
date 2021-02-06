import { useContext } from 'react'

import profile from '../../img/profile.jpeg';

import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { DataContext } from '../../Context/DataContext/DataContext';

const Dashboard = () => {

  const { user } = useContext(AuthContext)
  const { items, getInventory } = useContext(DataContext)

  user && getInventory(user.uid)

  return (
    <div className="w-screen h-screen grid gap-4 grid-cols-4 text-green-500 bg-gray-100 p-4">
      <div className="w-full bg-white">

        <div>
          <img className="w-full" src={profile} alt="" />
        </div>
        <div className="px-2">
          {/* <h2>Joe Doe</h2> */}

          <h2 className="text-2xl font-bold">{!user ? "Joe Doe" : user.email}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus quasi excepturi beatae. Optio totam delectus unde temporibus quis nam eveniet quos cumque non laborum est quaerat soluta, a reiciendis.</p>
        </div>
      </div>
      <div className="bg-white col-start-2 col-end-5 p-4">

        <div className="w-full h-full grid gap-4 grid-cols-4 grid-rows-4">

          {items.length === 0 ? <h2 className="text-2xl text-center">There is no items in stock</h2> : items.map(item => (
            <div className="h-full shadow-lg p-3" key={item.id}>
              <h3 className="text-center">{item.title}</h3>

              <div className="flex justify-between">

                <div className="border">
                  <p>Price</p>
                  <p>Cost</p>
                  <p>Units</p>
                </div>

                <div className="border">
                  <p>{item.price}</p>
                  <p>{item.cost}</p>
                  <p>{item.quantity}</p>
                </div>

              </div>

            </div>
          ))}

          {/* <div className="h-full shadow-lg p-3">
            <h3 className="text-center">Some Text</h3>

            <div className="flex justify-between">

              <div className="border">
                <p>text</p>
                <p>text</p>
                <p>text</p>
              </div>

              <div className="border">
                <p>100</p>
                <p>100</p>
                <p>100</p>
              </div>

            </div>

          </div>

          <div className="h-full shadow-lg p-3">
            <h3 className="text-center">Some Text</h3>

            <div className="flex justify-between">

              <div className="border">
                <p>text</p>
                <p>text</p>
                <p>text</p>
              </div>

              <div className="border">
                <p>100</p>
                <p>100</p>
                <p>100</p>
              </div>

            </div>

          </div>

          <div className="h-full shadow-lg p-3">
            <h3 className="text-center">Some Text</h3>

            <div className="flex justify-between">

              <div className="border">
                <p>text</p>
                <p>text</p>
                <p>text</p>
              </div>

              <div className="border">
                <p>100</p>
                <p>100</p>
                <p>100</p>
              </div>

            </div>

          </div>

          <div className="h-full shadow-lg p-3">
            <h3 className="text-center">Some Text</h3>

            <div className="flex justify-between">

              <div className="border">
                <p>text</p>
                <p>text</p>
                <p>text</p>
              </div>

              <div className="border">
                <p>100</p>
                <p>100</p>
                <p>100</p>
              </div>

            </div>

          </div>

          <div className="h-full shadow-lg p-3">
            <h3 className="text-center">Some Text</h3>

            <div className="flex justify-between">

              <div className="border">
                <p>text</p>
                <p>text</p>
                <p>text</p>
              </div>

              <div className="border">
                <p>100</p>
                <p>100</p>
                <p>100</p>
              </div>

            </div>

          </div> */}


        </div>
      </div>
    </div>
  );
};

export default Dashboard;