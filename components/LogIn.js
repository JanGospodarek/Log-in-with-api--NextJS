import { useRef } from "react";
import { useState } from "react";
export default function LogIn(props) {
  const [correct, setCorrect] = useState(true);
  const email = useRef();
  const passwd = useRef();
  function submitHandler(e) {
    e.preventDefault();

    const logInData = {
      email: email.current.value,
      password: passwd.current.value,
    };
    props.onLogIn(logInData);
    email.current.value = "";
    passwd.current.value = "";
  }
  return (
    <form onSubmit={submitHandler}>
      <input ref={email} type="email"></input>
      <input ref={passwd} type="password"></input>
      <input type="submit"></input>
    </form>
  );
}
