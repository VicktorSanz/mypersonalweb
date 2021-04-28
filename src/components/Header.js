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
  const [isExpanded, setExpanded] = useState(false);
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
    showHideMobileMenu()
  }

  const showHideMobileMenu = () => {
    setExpanded(!isExpanded)
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


  const toogleOpenIcon = () => {
    return (
      <span style={{ fill: 'rgba(0,0,0,.5)' }}>
        <svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvaa clWehF"><path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path></svg>
      </span>
    )
  }

  const toggleCloseIcon = () => {
    return (
      <span style={{ fill: 'rgba(0,0,0,.5)' }}>
        <svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="sc-bdvvaa clWehF"><path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"></path></svg>
      </span>
    )
  }


  return (
    < header className="header_area" >
      <div className={navbarClasses.join(" ")}>
        <Navbar expanded={isExpanded} expand="lg" bg={darkMode.value ? "dark" : ""} variant={darkMode.value ? "dark" : "light"}>
          <Navbar.Brand href="/"><img className="mainLogoHeader" src={images.mainLogo_header} alt="logo" />ictor_Dev</Navbar.Brand>
          {isMobile && darkModeButtons()}
          <button onClick={() => showHideMobileMenu()} className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" aria-controls="responsive-navbar-nav">
            {
              isExpanded ?
                toogleOpenIcon()
                :
                toggleCloseIcon()

            }
          </button>
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
