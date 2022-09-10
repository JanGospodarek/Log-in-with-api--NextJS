import Link from "next/link";
import React, { useRef } from "react";
export default function Select(props) {
  return (
    <React.Fragment>
      <Link href="/log/login">
        <button>Mam już konto</button>
      </Link>
      <Link href="/log/register">
        <button>Nie mam konta</button>
      </Link>
    </React.Fragment>
  );
}
