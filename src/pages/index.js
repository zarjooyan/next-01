import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

function HomePage() {
  return (
    <Link href="/signup">
      <button className="btn btn-primary position-absolute top-50 start-50 translate-middle" >Sign Up</button>
    </Link>
  );
}

export default HomePage;
