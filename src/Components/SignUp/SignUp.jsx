import { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom'

import { auth } from '../../firebase.config';

import { AuthContext } from '../../Context/AuthContext/AuthContext'

const SignUp = ({history}) => {

  const {getUser,isLogged} = useContext(AuthContext)

  const [data, setData] = useState({});

  const formChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    const { email, password } = data

    auth.createUserWithEmailAndPassword(email, password)
      .then(res => {

        const {user} = res
        getUser(user)
        isLogged(user)
        
        
        history.push("/dashboard")
      })
      .catch(err => {
        console.log(err.code, err.message)
      })
  }

  return (
    <form className="w-80 text-white bg-green-400 px-2 shadow-md" onSubmit={formSubmit}>
      <h2 className="text-center text-2xl font-black m-7">Create Your User!</h2>
      <div className=" pb-6 ">
        <label className="block" htmlFor="name">Name</label>
        <input className=" w-full text-black px-2" type="text" name="name" id="name" onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="lastName">Last Name</label>
        <input className=" w-full text-black px-2" type="text" name="lastName" id="lastName" onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="email">Email</label>
        <input className=" w-full text-black px-2" type="email" name="email" id="email" onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="password">Password</label>
        <input className=" w-full text-black px-2" type="password" name="password" id="password" onChange={formChange} />
      </div>

      <div className=" pb-6 ">
        <label className="block" htmlFor="passwordConfirm">Password Confirm</label>
        <input className=" w-full text-black px-2" type="password" name="passwordConfirm" id="passwordConfirm" onChange={formChange} />
      </div>

      <input className="text-white text-lg font-semibold bg-green-500 hover:bg-green-700 px-8 py-2 my-3" type="submit" />

    </form>
  );
}

export default withRouter(SignUp);