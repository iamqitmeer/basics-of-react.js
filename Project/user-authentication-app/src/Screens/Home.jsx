import React, { useState } from "react";
import { auth, signOut, onAuthStateChanged } from "../utils/firebase";
import { NavLink } from "react-router-dom";

function Home() {
  let [isUser, setIsUser] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
      setIsUser(user);
    } else {
      console.log("User is signed out");
    }
  });

  let loggedOutUser = () => {
    signOut(auth)
      .then(() => {
        alert("Sign-out successful");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="bg-green-300 w-full h-screen">
      <div className="flex items-center justify-between p-12 w-full h-32 ">
        <div>
          {isUser ? (
            <h1 className="text-2xl font-bold">{isUser.email}</h1>
          ) : (
            <h1 className="text-2xl font-bold">User Is Sign Out</h1>
          )}
        </div>
        <div>
          {isUser ? (
            <span
              onClick={loggedOutUser}
              className="cursor-pointer bg-green-800 text-white p-3 px-4 rounded-lg hover:bg-green-700 font-bold shadow-xl"
            >
              Sign Out
            </span>
          ) : (
            <NavLink
              to="/login"
              className="cursor-pointer bg-green-800 text-white p-3 px-4 rounded-lg hover:bg-green-700 font-bold shadow-xl"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
