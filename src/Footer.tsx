import instaLogo from "./assets/instagram.png";
import facebookLogo from "./assets/facebook.png";
import twiterLogo from "./assets/twitter.png";
import linkedinLogo from "./assets/linkedin.png";
import gmailLogo from "./assets/logo-gmail-9952.png";


export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-auth">
        <p className="footer-text">&copy; {date} Sateesh Polina. All Rights Reserved.</p>
      </div>
      <div>
        <a
          href="https://www.instagram.com/mr_unlucke/"
          title="instagram"
          target="_blank"
        >
          <img src={instaLogo}  className="icons"/>
        </a>
        <a
          href="https://www.facebook.com/sateesh.chowdhary.5"
          target="_blank"
          title="Facebook"
        >
          <img
            src={facebookLogo}
            className="icons"
          
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sateesh-polina/"
          title="Linkedin"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            className="icons"

           
          />
        </a>
        <a href="">
          <img
            src={twiterLogo}
            className="icons"
            
          />
        </a>
        <a href="mailto:polinasateesh212@gmail.com" title="Gmail">
          <img src={gmailLogo}  className="icons"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
