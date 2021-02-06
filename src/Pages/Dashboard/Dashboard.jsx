import { useContext } from 'react'

import profile from '../../img/profile.jpeg';

import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { DataContext } from '../../Context/DataContext/DataContext';
import Item from '../../Components/Item/Item';
import ItemContainer from '../../Components/ItemContainer/ItemContainer';

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
      <ItemContainer items={items} />
    </div>
  );
};

export default Dashboard;