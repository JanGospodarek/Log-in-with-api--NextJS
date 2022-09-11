import { useRef, useState } from "react";
export default function RegIn(props) {
  const [correct, setCorrect] = useState(true);
  const email = useRef("");
  const name = useRef("");
  const passwd = useRef("");
  const passwd2 = useRef("");
  function submitHandler(e) {
    e.preventDefault();
    if (
      passwd2.current.value !== passwd.current.value ||
      passwd.current.value.split("").length < 8
    ) {
      console.log(passwd.current.value.split("").length < 8);
      passwd.current.value = "";
      passwd2.current.value = "";
      setCorrect(false);
    } else {
      const regInData = {
        name: name.current.value,
        email: email.current.value,
        password: passwd.current.value,
        password2: passwd2.current.value,
      };
      props.onRegIn(regInData);
      email.current.value = "";
      name.current.value = "";
      passwd.current.value = "";
      passwd2.current.value = "";
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input ref={name} type="text"></input>
      <label>Email</label>
      <input ref={email} type="email"></input>
      <label>Password</label>
      <input ref={passwd} type="password"></input>
      <label>Confirm password</label>
      <input ref={passwd2} type="password"></input>
      <button type="submit">Create account</button>
    </form>
  );
}
