import { useRouter } from "next/router";
import RegIn from "../../components/RegIn";
import { addUser } from "../api/users";
export default function RegInPage() {
  const router = useRouter();
  async function onRegIn(data) {
    try {
      const promise = await addUser(data);
      router.replace("/log/login");
    } catch (error) {
      alert(error.message);
    }
  }
  return <RegIn onRegIn={onRegIn}></RegIn>;
}
