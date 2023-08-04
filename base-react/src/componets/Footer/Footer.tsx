import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer sec-padding">
      <div className="container">
        <div className="footer-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="footer-widget about-widget" style={{ flex: '1 1 30%', maxWidth: '30%', boxSizing: 'border-box' }}>
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-shop me-2"></i> <strong>KING MOBILE</strong>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada fringilla sem, at dictum lectus
              ultricies quis. Etiam eu bibendum orci. Aliquam erat volutpat.
            </p>
            <div className="link">
              <a href="#">MORE ABOUT US</a>
            </div>
          </div>
          <div
            className="footer-widget links-widget links-widget-pac"
            style={{ flex: '1 1 23%', maxWidth: '23%', boxSizing: 'border-box' }}
          >
            <div className="title">
              <h5>Services</h5>
            </div>
            <div className="row">
              <ul className="no-dot">
                <li>
                  <a href="#">Hotel Growth</a>
                </li>
                <li>
                  <a href="#">Hotel Loan</a>
                </li>
                <li>
                  <a href="#">Financial Planning</a>
                </li>
                <li>
                  <a href="#">Insurance Consulting</a>
                </li>
                <li>
                  <a href="#">Retirement Planning</a>
                </li>
                <li>
                  <a href="#">Tax Planning</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-widget subscribe-widget" style={{ flex: '1 1 23%', maxWidth: '23%', boxSizing: 'border-box' }}>
            <div className="title">
              <h5>Subscribe Newsletter</h5>
            </div>
            <form action="#">
              <p>Get the latest updates and offers.</p>
              <div className="newsletter-widget" style={{ flexDirection: 'column', boxSizing: 'border-box', display: 'flex' }}>
                <input placeholder="Enter your email address" type="text" />
                <button
                  className="button ped-btn-footer mat-focus-indicator mat-raised-button mat-button-base mat-primary"
                  color="primary"
                  mat-raised-button=""
                  type="submit"
                  style={{ borderRadius: '10px' }}
                >
                  <span className="mat-button-wrapper">SUBSCRIBE US</span>
                  <span className="mat-button-ripple mat-ripple" ></span>
                  <span className="mat-button-focus-overlay"></span>
                </button>
              </div>
            </form>
          </div>
          <div
            className="footer-widget subscribe-widget"
            style={{ flex: '1 1 23%', maxWidth: '23%', boxSizing: 'border-box' }}
          >
            <div className="title">
              <h5>Contact Us</h5>
            </div>
            <div className="tel-box" style={{ flexDirection: 'row', boxSizing: 'border-box', display: 'flex' }}>
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="text">
                <p>Apple St, New York, NY 10012, USA</p>
              </div>
            </div>
            <div className="tel-box" style={{ flexDirection: 'row', boxSizing: 'border-box', display: 'flex' }}>
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="text">
                <p>(018) 65 524 8503 / (125) 954 7854</p>
              </div>
            </div>
            <div className="tel-box" style={{ flexDirection: 'row', boxSizing: 'border-box', display: 'flex' }}>
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="text">
                <p>
                  <a href="#">contact@lamarena.com</a>
                </p>
              </div>
            </div>
            <ul className="social list-inline" style={{ flexDirection: 'row', boxSizing: 'border-box', display: 'flex' }}>
              <li>
                <a href="#"><i className="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-google-plus"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
