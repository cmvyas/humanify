import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { auth } from "../../firebase.js";

function Signin() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {/* <header>
        <Link to='/' style={{ textDecoration: " none" }}>
          <h2 className='logo'>HUmanify</h2>
        </Link>
      </header> */}
      <Button
        onClick={signInWithGoogle}
        style={{
          padding: "20px",
          fontSize: "20px",
          border: "2px  #003638 solid",
          fontWeight: "600",
          background: "#297F87",
          color: "#fff",
          textTransform: "none",
          borderRadius: "8px",
        }}
      >
        SignIn Google
      </Button>
    </div>
  );
}

export default Signin;
