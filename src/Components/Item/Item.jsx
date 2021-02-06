import { useContext } from 'react';

import { DataContext } from '../../Context/DataContext/DataContext';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Item = ({ item }) => {

  const { deleteItem } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="h-full shadow-lg p-3">
      <h3 className="text-center text-2xl font-semibold mb-3">{item.title}</h3>

      <div className="flex justify-between mb-3">

        <div className="">
          <p className="font-medium">Price</p>
          <p className="font-medium">Cost</p>
          <p className="font-medium">Units</p>
        </div>

        <div className="">
          <p>{item.price}</p>
          <p>{item.cost}</p>
          <p>{item.quantity}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="text-white bg-green-400">Editar</button>
        <button className="text-white bg-red-400" onClick={() => {
          console.log("click")
          deleteItem(user.id, item)
        }}>Borrar</button>
      </div>

    </div>
  );
}

export default Item;