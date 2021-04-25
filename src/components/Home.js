import {
  Presentation,
  AboutMe,
  TechArea,
  Portafolio
} from '../components'
import '../styles/home.scss';

const Home = (props) => {
  return (
    <>
      <Presentation />
      <AboutMe />
      <TechArea />
      <Portafolio />
    </>
  );
}

export default Home;