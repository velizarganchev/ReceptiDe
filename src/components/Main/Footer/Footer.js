const Footer = () => {
  return (
    <footer className="footer">
      <article>
        <ul className="footer-social-media">
          <li>
            <a href="https://www.facebook.com" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" className="icon">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </article>
      <p className="footer-menu-all-right-reserved">All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
