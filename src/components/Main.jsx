import { useState } from "react";

function Main({ h1, p, buttonName }) {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="bg-light text-center py-5">
      <div className="container">
        <h1>{h1}</h1>
        <p className="lead">
          {p} {count}
        </p>
        <button className="btn btn-primary btn-lg" onClick={handleClick}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}

export default Main;
