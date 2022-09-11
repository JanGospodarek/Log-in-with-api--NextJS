import { Router, useRouter } from "next/router";
import { useRef } from "react";
import LogIn from "../../components/LogIn";
import { getAllUsers } from "../api/users";
export default function LogInPage(props) {
  const router = useRouter();
  async function onLogIn(data) {
    try {
      const userName = await getAllUsers(data);
      console.log(userName);
      router.push({
        pathname: "/[userData]",
        query: { userData: userName },
      });
    } catch (error) {
      alert(error.message);
    }
  }
  return <LogIn onLogIn={onLogIn}></LogIn>;
}
