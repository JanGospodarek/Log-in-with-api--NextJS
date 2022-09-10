import React, { useRef } from "react";
export default function Select(props) {
  return (
    <React.Fragment>
      <button onClick={props.onSelectLogIn}>Mam już konto</button>
      <button onClick={props.onSelectRegIn}>Nie mam konta</button>
    </React.Fragment>
  );
}
