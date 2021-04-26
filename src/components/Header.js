import { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import useDarkMode from 'use-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { images } from '../constants'
import { useIsMobileScreen } from '../utils/screen'
import '../styles/header.scss';

const Header = () => {

  const darkMode = useDarkMode(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPages] = useState([
    'Home',
    'About',
    'Development',
    'Portfolio',
    //'Pages',
    //'Blog',
    'Contact'
  ]);
  const isMobile = useIsMobileScreen()
  let navbarClasses = ['main-menu'];

  if (scrolled) {
    navbarClasses.push('navbar_fixed');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  const goToPageSection = (pageSection) => {
    let elm;
    elm = document.getElementById(pageSection);
    if (elm) {
      elm.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  const darkModeButtons = () => {
    return (
      <Nav className="ml-auto">
        {
          darkMode.value ?
            <button className="darkmode-button" type="button" onClick={darkMode.disable}>
              <FontAwesomeIcon color="darkorange" icon={faSun} spin size="lg" />
            </button>
            :
            <button className="darkmode-button" type="button" onClick={darkMode.enable}>
              <FontAwesomeIcon icon={faMoon} />
            </button>
        }
      </Nav>
    )
  }


  return (
    < header className="header_area" >
      <div className={navbarClasses.join(" ")}>
        <Navbar collapseOnSelect expand="lg" bg={darkMode.value ? "dark" : ""} variant={darkMode.value ? "dark" : "light"}>
          <Navbar.Brand href="/"><img className="mainLogoHeader" src={images.mainLogo_header} alt="logo" />ictor_Dev</Navbar.Brand>
          {isMobile && darkModeButtons()}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              {
                menuPages.map((pageName, i) => <Nav.Link key={i} onClick={() => goToPageSection(pageName)}>{pageName}</Nav.Link>)
              }
            </Nav>
          </Navbar.Collapse>
          {!isMobile && darkModeButtons()}
        </Navbar>
      </div>
    </header >
  );
}

export default Header;
