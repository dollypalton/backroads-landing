import Pagelink from "./Pagelink";
import Sociallink from "./Sociallink";

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelink parentClass="footer-links" childClass="footer-link" />

      <Sociallink parentClass="footer-icons" childClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
