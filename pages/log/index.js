import { useRouter } from "next/router";
import Select from "../../components/Select";

export default function LoggingPage() {
  const router = useRouter();
  // function onSelectLogIn() {
  //   router.push("/log/login");
  // }
  // function onSelectRegIn() {
  //   router.push("/log/register");
  // }
  return <Select></Select>;
}
