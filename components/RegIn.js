import { useRef } from "react";
export default function RegIn(props) {
  const email = useRef();
  const passwd = useRef();
  const passwd2 = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const regInData = {
      email: email.current.value,
      password: passwd.current.value,
      password2: passwd2.current.value,
    };
    props.onRegIn(regInData);
    email.current.value = "";
    passwd.current.value = "";
    passwd2.current.value = "";
  }
  return (
    <form onSubmit={submitHandler}>
      <input ref={email} type="email"></input>
      <input ref={passwd} type="password"></input>
      <input ref={passwd2} type="password"></input>
      <input type="submit"></input>
    </form>
  );
}
