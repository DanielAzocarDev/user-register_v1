import Item from '../Item/Item';

const ItemContainer = ({ items }) => {
  return (
    <div className="bg-white col-start-2 col-end-5 p-4">

      {items.length === 0 ? <h2 className="text-2xl text-center">There is no items in stock</h2> : (
        <div className="w-full h-full grid gap-4 grid-cols-4 grid-rows-4">

          {items.map(item => <Item item={item} key={item.id} />)}

        </div>
      )}

    </div>
  );
}

export default ItemContainer;