import React, { useEffect, useState } from 'react';
import { images } from '../constants'
import Isotope from 'isotope-layout';
import '../styles/portafolio.scss';


const Portafolio = (props) => {

  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    setIsotope(
      new Isotope('.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      })
    )
  }, [])

  const onChangeFilter = (filter) => {
    isotope.arrange({
      filter: filter
    })
  }

  const buttonsFilterGroup = () => {

    let buttonsFilter = [
      { buttonText: 'All', buttonAction: "*" },
      { buttonText: 'Web', buttonAction: ".web" },
      { buttonText: 'Mobile', buttonAction: ".mobile" },
      { buttonText: 'Personals', buttonAction: ".personals" },
    ]

    return (
      <div class="button-group">
        {
          buttonsFilter.map(button =>
            <button type="button" onClick={() => onChangeFilter(button.buttonAction)}>{button.buttonText}</button>
          )
        }
      </div>
    )
  }

  const mainHeaderText = () => {
    return (
      <div class="project-title">
        <h1 class="text-uppercase title-h1">Recently Done Project</h1>
      </div>
    )
  }


  const projectShowcaseItem = (itemData) => {
    return (
      <div class={`col-lg-4 col-md-6 col-sm-12 element-item ${itemData.category}`}>
        <div class="our-project">
          <div class="img">
            <a class="test-popup-link" href={itemData.url}>
              <img src={itemData.image} alt="portfolio-1" class="img-fluid" />
            </a>
          </div>
          <div class="title py-4">
            <h4 class="text-uppercase">{itemData.name}</h4>
            <span class="text-secondary">{itemData.description}</span>
          </div>
        </div>
      </div>
    )
  }

  const projectShowcase = () => {

    let projectsList = [
      { name: 'Fahorro App Landing', description: 'Landing Page from ', image: "./img/portfolio/p1.jpg", category: "web", url: "https://www.delahorro.app/" },
      { name: 'Fahorro E-comerce', description: 'Popular, Portfolio', image: "./img/portfolio/p1.jpg", category: "web", url: "https://farmaciasdelahorro.hn/" },
      { name: 'Desafio Aceptado', description: 'Popular, Portfolio', image: "./img/portfolio/p1.jpg", category: "web", url: "" },
      { name: 'Tombola Regalona', description: 'Upcoming, Portfolio', image: "./img/portfolio/p1.jpg", category: "web", url: "" },
      { name: 'Farmacias del Ahorro App', description: 'Upcoming, Portfolio', image: "./img/portfolio/p1.jpg", category: "mobile", url: "" },
      { name: 'FarmaValue App', description: 'Upcoming, Portfolio', image: "./img/portfolio/p1.jpg", category: "mobile", url: "" },
      { name: 'Personal Web', description: 'Upcoming, Portfolio', image: "./img/portfolio/p1.jpg", category: "personals", url: "" },
      { name: 'Delivery App', description: 'Upcoming, Portfolio', image: "./img/portfolio/p1.jpg", category: "personals", url: "" },
      { name: 'Photo Gallery App', description: 'Upcoming, Portfolio', image: "./img/portfolio/p1.jpg", category: "personals", url: "" },
    ]

    return (
      <div class="row grid">
        {
          projectsList.map(project =>
            projectShowcaseItem(project)
          )
        }
      </div>
    )
  }

  return (
    <section class="project-area">
      <div class="container">
        {mainHeaderText()}
        {buttonsFilterGroup()}
        {projectShowcase()}
      </div>
    </section>
  )
}

export default Portafolio;