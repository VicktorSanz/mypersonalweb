import {
  Presentation,
  AboutMe,
  TechArea,
  Portfolio,
  Footer
} from '../components'
import '../styles/home.scss';

const Home = (props) => {
  return (
    <>
      <Presentation />
      <AboutMe />
      <TechArea />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;