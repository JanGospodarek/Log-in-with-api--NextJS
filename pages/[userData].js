import { useRouter } from "next/router";
export default function userDataPage(props) {
  const router = useRouter();
  const data = router.query.userData;
  console.log(data);
  return <p>Hello, {data}</p>;
}
