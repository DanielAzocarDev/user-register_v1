import SignIn from "../../Components/SignIn/SignIn";

import { auth } from '../../firebase.config';

const SignInPage = ({ history }) => {

  const signInWithEmailPassword = (data) => {
    const { email, password } = data

    auth.signInWithEmailAndPassword(email, password)
      .then((res) => {

        const user = res.user;

        console.log(`the user ${user.email} has logged in`);

        history.push("/dashboard")
      })
  };


  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignIn signInWithEmailPassword={signInWithEmailPassword} />
    </div>
  );
};

export default SignInPage;