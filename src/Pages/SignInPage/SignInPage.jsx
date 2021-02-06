import { useContext } from "react"

import SignIn from "../../Components/SignIn/SignIn";

import { auth } from '../../firebase.config';

import { AuthContext } from '../../Context/AuthContext/AuthContext'

const SignInPage = ({ history }) => {

  const { getUser } = useContext(AuthContext)

  const signInWithEmailPassword = (data) => {
    const { email, password } = data

    auth.signInWithEmailAndPassword(email, password)
      .then((res) => {

        const user = res.user;

        getUser(user)

        console.log(`the user ${user.email} has logged in`);

        history.push("/dashboard")
      })
      .catch(error => {
        console.log(error.message, error.code)

        error.code === "auth/wrong-password" && console.log("Usuario o Contraseña incorrectos!!!❌❌❌")
      })
  };


  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn signInWithEmailPassword={signInWithEmailPassword} />
    </div>
  );
};

export default SignInPage;