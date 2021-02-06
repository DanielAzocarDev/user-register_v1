import { useContext } from "react";

import SignUp from "../../Components/SignUp/SignUp";

import { auth } from '../../firebase.config';

import { AuthContext } from '../../Context/AuthContext/AuthContext';

const SignUpPage = ({ history }) => {

  const { getUser } = useContext(AuthContext)

  const signUpWithEmailPassword = (data) => {

    const { email, password } = data

    auth.createUserWithEmailAndPassword(email, password)
      .then(res => {

        const { user } = res
        getUser(user)

        console.log(user)
        history.push("/dashboard")
      })
      .catch(error => {
        console.log(error.message, error.code)
        error.code === "auth/email-already-in-use" && console.log("Este correo ya se encuentra registrado!!🙈🙈🙈")
      })
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignUp signUpWithEmailPassword={signUpWithEmailPassword} />
    </div>
  );
}

export default SignUpPage;