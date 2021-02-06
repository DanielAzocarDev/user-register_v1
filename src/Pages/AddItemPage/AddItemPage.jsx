import AddItem from "../../Components/AddItem/AddItem";

const AddItemPage = (props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AddItem history={props.history} />
    </div>
  );
}

export default AddItemPage;