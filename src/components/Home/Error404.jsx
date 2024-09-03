import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <h2>Nie znaleziono strony</h2>
      <button>
        <Link to="/">Strona główna</Link>
      </button>
    </>
  );
};

export default Error404;
