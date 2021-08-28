import React from "react";
import { auth } from "../../firebase";
import { Button } from "@material-ui/core";

function Signout() {
  return (
    <div className='himanifychat'>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          width: "93%",

          backgroundColor: "transparent",
          top: "2px",

          zIndex: "10",
        }}
      >
        <div>
          <Button
            style={{
              backgroundColor: "#2D2424",
              padding: "0.8vmax",
              fontSize: "0.8vmax",
              borderRadius: "2px",
              fontWeight: "500",
              color: "white",
              letterSpacing: "2px",
              borderRadius: "4px",
            }}
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signout;
