import Typewriter from 'typewriter-effect';
import { images } from '../constants'
import '../styles/presentation.scss';


const Presentation = (props) => {

  const floatingCode = () => {
    return (
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }

  const consoleWriting = () => {
    let typeWriterStrings = ['React Developer 👾', 'Software Engineer 💻', 'Mobile Developer 📲', 'Web Developer 🌐']
    return (
      <Typewriter
        options={{
          strings: typeWriterStrings,
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50
        }}
      />
    )
  }

  const mainImageBanner = () => {
    return (
      <div className="col-lg-6 col-md-12 banner-image">
        <img src={images.coderBanner} alt="banner-img" className="img-fluid" />
      </div>
    )
  }

  const mainText = () => {
    return (
      <div className="col-lg-6 col-md-12 site-title">
        <h3 className="title-text">Hey</h3>
        <h1 className="title-text text-uppercase">I am Victor</h1>
        <h4 className="title-text text-uppercase typewriter">
          {consoleWriting()}
        </h4>
        <div className="site-buttons">
          <div className="d-flex flex-row flex-wrap">
            {/*<button type="button" className="button primary-button mr-4 text-uppercase">hire me</button>*/}
            <button type="button" className="button secondary-button text-uppercase">Get my Cv</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id='Home' className="site-banner">
      <div className="container">
        {floatingCode()}
        <div className="row">
          {mainText()}
          {mainImageBanner()}
        </div>
      </div>
    </section>
  );
}

export default Presentation;