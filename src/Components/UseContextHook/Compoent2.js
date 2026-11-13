import { useContext } from "react";
import {UserContext} from './useContexComponent'


export default function Component2() {
    const user = useContext(UserContext);
   console.log("user",user)
    return (
      <>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }