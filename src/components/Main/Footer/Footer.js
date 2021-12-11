import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <article>
        <ul className="footer-social-media">
          <li>
            <Link to={"https://www.facebook.com/"} className="icon">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to={{}} className="icon">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to={{}} className="icon">
              <i className="fab fa-google-plus-g"></i>
            </Link>
          </li>
          <li>
            <Link to={{}} className="icon">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link to={{}} className="icon">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </article>
      <p className="footer-menu-all-right-reserved">All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
