import React from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //   google login auth
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Login</button>
    </div>
  );
};

export default Login;
