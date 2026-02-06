function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.headerName}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
