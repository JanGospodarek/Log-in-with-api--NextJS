import RegIn from "../../components/RegIn";
export default function RegInPage() {
  function onRegIn(data) {
    console.log(data);
  }
  return <RegIn onRegIn={onRegIn}></RegIn>;
}
