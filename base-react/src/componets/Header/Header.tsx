// import { a } from "react-router-dom"; // Import a from React Router if you are using it

const Header = () => {
  return (
    <>
      {/* Your CSS import goes here */}
      {/* Make sure you have a valid CSS file with styles for this component */}

      {/* Super Nav */}
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>info@somedomain.com</strong>
              </span>
              <span className="me-3" style={{ color: "#B22830" }}>
                <i className="fa-solid fa-phone me-1"></i>{" "}
                <strong>1-800-123-1234</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck text-muted me-1"></i>
                <a href="#" className="text-muted">
                  Shipping
                </a>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file  text-muted me-2"></i>
                <a href="#" className="text-muted">
                  Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i className="fa-solid fa-shop me-2"></i>{" "}
            <strong>KING MOBILE</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="mx-auto my-3 d-lg-none d-sm-block d-xs-block collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <div className="input-group">
              <span className="icon-search input-group-text text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="search-input form-control"
                style={{ color: "#7a7a7a" }}
              />
              <button className="btn text-white">Search</button>
            </div>
          </div>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link mx-2 text-uppercase active"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/catalog"
                  className="nav-link mx-2 text-uppercase"
                >
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/services"
                  className="nav-link mx-2 text-uppercase"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about"
                  className="nav-link mx-2 text-uppercase"
                >
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a href="/cart" className="nav-link mx-2 text-uppercase">
                  <i className="fa-solid fa-cart-shopping me-1"></i>{" "}
                  Cart
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link mx-2 text-uppercase dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </a>
                <div className="dropdown-menu">
                  <a href="/login" className="dropdown-item">
                    Login
                  </a>
                  <a href="/register" className="dropdown-item">
                    Register
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
