import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
const StudentChat = () => {
  let socket = useRef(io("ws://localhost:8900"));
  useEffect(() => {
    socket.current.emit("adduser", 123);
  }, []);
  
  useEffect(() => {
    socket?.current.on("welcome", msg => {
      console.log(msg);
    });
  }, [socket]);
  
  return <div>StudentChat</div>;
};

export default StudentChat;


