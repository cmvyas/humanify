import React, { useState, useEffect, useRef } from "react";
import Signout from "./Signout";
import { auth, db } from "../../firebase";
import SendMessages from "./SendMessages";

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className='humanifychat'>
      <div className='color'>
        <Signout />
        <div className='msgs'>
          {messages.map(({ id, text, photoURL, uid }) => (
            <div>
              <div
                key={id}
                className={`msg ${
                  uid === auth.currentUser.uid ? "sent" : "recived"
                }`}
              >
                <img className='dp' alt='dp' src={photoURL} />
                <p className='chatp'>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <SendMessages scroll={scroll} />
        <div ref={scroll}></div>
      </div>
    </div>
  );
}

export default Chat;
