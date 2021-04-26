import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { images } from '../constants'
import '../styles/footer.scss';


const Footer = (props) => {
  return (
    <footer id="Contact" className="footer-area">
      <div className="container">
        <div className="">
          <div className="site-logo text-center py-4">
            <img className="mainLogoFooter" src={images.mainLogo} alt="logo" />
          </div>
          <div className="social text-center">
            <h5 className="text-uppercase">Follow me</h5>
            <a><i><FontAwesomeIcon icon={faGithub} size="lg" /></i></a>
            <a ><i><FontAwesomeIcon icon={faFacebook} size="lg" /></i></a>
            <a ><i><FontAwesomeIcon icon={faInstagram} size="lg" /></i></a>
            <a ><i><FontAwesomeIcon icon={faYoutube} size="lg" /></i></a>
            <a ><i><FontAwesomeIcon icon={faTwitter} size="lg" /></i></a>
          </div>
          <div className="copyrights text-center">
            <p className="para">
              VictorDev Copyright ©2021 All rights reserved | This site is made with ❤ in React
            </p>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer;