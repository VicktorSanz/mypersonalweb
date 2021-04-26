import React, { useState } from 'react';
import { images } from '../constants'
import Isotope from 'isotope-layout';
import '../styles/portafolio.scss';


const Portfolio = (props) => {

  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);

  const initializeIsotpe = (filter) => {
    let isotope = new Isotope('.grid', {
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
    })
    setIsotope(isotope)
    isotope.arrange({ filter: filter })
  }

  const onChangeFilter = (filter) => {
    if (isotope) {
      isotope.arrange({ filter: filter })
    } else {
      initializeIsotpe(filter)
    }
  }

  const buttonsFilterGroup = () => {

    let buttonsFilter = [
      { buttonText: 'All', buttonAction: "*" },
      { buttonText: 'Web', buttonAction: ".web" },
      { buttonText: 'Mobile', buttonAction: ".mobile" },
      { buttonText: 'Personals', buttonAction: ".personals" },
    ]

    return (
      <div className="button-group">
        {
          buttonsFilter.map((button, i) =>
            <button key={i} type="button" onClick={() => onChangeFilter(button.buttonAction)}>{button.buttonText}</button>
          )
        }
      </div>
    )
  }

  const mainHeaderText = () => {
    return (
      <div className="project-title">
        <h1 className="text-uppercase title-h1">Recently Done Project</h1>
      </div>
    )
  }


  const projectShowcaseItem = (itemData) => {
    return (
      <div key={itemData.id} className={`col-lg-4 col-md-6 col-sm-12 element-item ${itemData.category}`}>
        <div className="our-project">
          <div className="img">
            <a className="test-popup-link" href={itemData.url}>
              <img src={itemData.image} alt="portfolio-1" className="img-fluid" />
            </a>
          </div>
          <div className="title py-4">
            <h4 className="text-uppercase">{itemData.name}</h4>
            <span className="text-secondary">{itemData.description}</span>
          </div>
        </div>
      </div>
    )
  }

  const projectShowcase = () => {

    let projectsList = [
      { id: 1, name: 'Fahorro App Landing', description: 'Landing Page from ', image: images.faLanging_img, category: "web", url: "https://www.delahorro.app/" },
      { id: 2, name: 'Fahorro E-comerce', description: 'Popular, Portfolio', image: images.faWeb_img, category: "web", url: "https://farmaciasdelahorro.hn/" },
      { id: 3, name: 'Desafio Aceptado', description: 'Popular, Portfolio', image: images.desafio_img, category: "web", url: "" },
      { id: 4, name: 'Tombola Regalona', description: 'Upcoming, Portfolio', image: images.tombola_img, category: "web", url: "" },
      { id: 5, name: 'Farmacias del Ahorro App', description: 'Upcoming, Portfolio', image: images.faApp_img, category: "mobile", url: "" },
      { id: 6, name: 'FarmaValue App', description: 'Upcoming, Portfolio', image: images.farmavalueApp_img, category: "mobile", url: "" },
      { id: 7, name: 'Personal Web', description: 'Upcoming, Portfolio', image: images.personalWeb_img, category: "personals", url: "" },
      { id: 8, name: 'Delivery App', description: 'Upcoming, Portfolio', image: images.delyveryApp_img, category: "personals", url: "" },
      { id: 9, name: 'Photo Gallery App', description: 'Upcoming, Portfolio', image: images.photoGaleryApp_img, category: "personals", url: "" },
    ]

    return (
      <div className="row grid">
        {
          projectsList.map(project =>
            projectShowcaseItem(project)
          )
        }
      </div>
    )
  }

  return (
    <section id="Portfolio" className="project-area">
      <div className="container">
        {mainHeaderText()}
        {buttonsFilterGroup()}
        {projectShowcase()}
      </div>
    </section>
  )
}

export default Portfolio;