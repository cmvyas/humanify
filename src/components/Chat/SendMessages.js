import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { db, auth } from "../../firebase";
import firebase from "firebase";

function SendMessages({ scroll }) {
  const [msg, setMsg] = useState("");
  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form className='formchat' onSubmit={sendMessage}>
        <div className='sendmsginput'>
          <Input
            className='typechat'
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder='Type a message'
          />
          <Button
            style={{
              color: "black",
              textTransform: "uppercase",
              fontSize: "2vmin",
              borderRadius: "10px",
              fontWeight: "400",
              letterSpacing: "2px",
              backgroundColor: "#fff",
              marginLeft: "20px",
            }}
            type='submit'
            className='sendbutton'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessages;
