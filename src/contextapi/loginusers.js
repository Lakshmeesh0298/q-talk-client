import React, { useState } from "react";
export let Globalusers = React.createContext();
export default Loginusers = ({ children }) => {
  let [loginuser, setLoginUser] = useState("");
  return (
    <Globalusers.Provider value={(loginuser, setLoginUser)}>
      {children}
    </Globalusers.Provider>
  );
};
