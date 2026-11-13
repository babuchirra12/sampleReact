import { useState, createContext, useContext } from "react";
import Component2 from './Compoent2'
export const UserContext = createContext();

export default function UseContexComponent() {
  const [user, setUser] = useState("Hello React");

  return (
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  );
}