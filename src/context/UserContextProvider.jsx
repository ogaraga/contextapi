import { useState } from "react";
import UserContext from "./UserContext";
import PropTypes from "prop-types";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const [modal, setModal] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser, modal, setModal }}>
      {children}
    </UserContext.Provider>
  );
}
UserContextProvider.propTypes = {
  children: PropTypes.object,
};

export default UserContextProvider;
