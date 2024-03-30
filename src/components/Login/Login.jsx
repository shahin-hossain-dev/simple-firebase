import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //   google login auth
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => console.log(error.message));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Login</button>
      )}
      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <h3>Email : {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
