import { useState } from 'react';

const SignIn = ({ signInWithEmailPassword }) => {

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

    signInWithEmailPassword(data)
  }

  return (
    <form className="w-80 text-white bg-green-400 px-2 shadow-md" onSubmit={formSubmit}>
      <h2 className="text-center text-2xl font-black m-7">Create Your User!</h2>

      <div className="pb-6">
        <label className="block" htmlFor="email">Email</label>
        <input className="w-full text-black px-2" type="email" name="email" id="email" onChange={formChange} />
      </div>
      <div className="pb-6">
        <label className="block" htmlFor="password">Password</label>
        <input className="w-full text-black px-2" type="password" name="password" id="password" onChange={formChange} />
      </div>


      <input className="text-white text-lg font-semibold bg-green-500 hover:bg-green-700 px-8 py-2 my-3" type="submit" />
    </form>
  );
}

export default SignIn;