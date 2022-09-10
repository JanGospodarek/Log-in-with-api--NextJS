import { useRef } from "react";
import LogIn from "../../components/LogIn";
export default function LogInPage(props) {
  function onLogIn(data) {
    console.log(data);
  }
  return <LogIn onLogIn={onLogIn}></LogIn>;
}
