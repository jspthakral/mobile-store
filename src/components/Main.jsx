function Main({ h1, p, buttonName }) {
  return (
    <div className="bg-light text-center py-5">
      <div className="container">
        <h1>{h1}</h1>
        <p className="lead">{p}</p>
        <button className="btn btn-primary btn-lg">{buttonName}</button>
      </div>
    </div>
  );
}

export default Main;
