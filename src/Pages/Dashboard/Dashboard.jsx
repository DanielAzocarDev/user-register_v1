import profile from '../../img/profile.jpeg';

import {auth} from '../../firebase.config';

const Dashboard = ({user}) => {

  console.log(user)
  return (
    <div className="w-screen h-screen grid gap-4 grid-cols-4 text-green-500 bg-gray-100 p-4">
      <div className="w-full bg-white">

        <div>
          <img className="w-full" src={profile} alt=""/>
        </div>
        <div className="px-2">
          <h2>Joe Doe</h2>
          {/* <h2>{!user.displayName ? "Joe Doe" : user.email}</h2> */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus quasi excepturi beatae. Optio totam delectus unde temporibus quis nam eveniet quos cumque non laborum est quaerat soluta, a reiciendis.</p>
        </div>
      </div>
      <div className="bg-white col-start-2 col-end-5 p-4">

      <div className="w-full h-full grid gap-4 grid-cols-4 grid-rows-4">

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


      </div>
      </div>
    </div>
  );
};

export default Dashboard;