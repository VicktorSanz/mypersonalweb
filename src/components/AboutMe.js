import { images } from '../constants'
import { useIsMobileScreen } from '../utils/screen'
import '../styles/aboutMe.scss';

const AboutMe = (props) => {
  const isMobile = useIsMobileScreen()

  const aboutMeHederText = () => {
    return (
      <div className="about-title">
        <h2 className="text-uppercase pt-5">
          <span>Let me</span>
          <span>introduce</span>
          <span>myself</span>
        </h2>
      </div>
    )
  }

  const aboutImage = () => {
    return (
      <div className="col-lg-6 col-md-12">
        {isMobile && aboutMeHederText()}
        <div className="about-image">
          <img src={images.AboutImage} alt="About me" className="img-fluid" />
        </div>
      </div>
    )
  }

  const aboutText = () => {
    return (
      <div className="col-lg-6 col-md-12">
        {!isMobile && aboutMeHederText()}
        <div className="paragraph py-4 w-75">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure obcaecati vel
            possimus officia maiores perferendis ut! Quos, perspiciatis.
        </p>
          <p className="para">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here
        </p>
        </div>
        <button type="button" className="button primary-button text-uppercase">Download cv</button>
      </div>
    )
  }

  return (
    <section id='About' className="about-area">
      <div className="container-fluid">
        <div className="row">
          {aboutImage()}
          {aboutText()}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;