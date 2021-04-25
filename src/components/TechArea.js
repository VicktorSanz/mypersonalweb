import '../styles/techArea.scss';
import { images } from '../constants'

const TechArea = (props) => {

  const techRows = () => {
    let techs = [
      'React',
      'Redux',
      'Cordova',
      'Ionic React',
      'React Native',
      'C#',
      'Node JS',
      'RUBY',
      'MySql',
      'Mongo Db',
      'AWS',
      'Git',
      'Jira',
      'Google Apis',
      'Facebook Apis',
      'Google PlayStore',
      'Apple Store',
      'Huawei AppGalery',
    ]

    return (
      <div className="col-xl-6 col-lg-12 col-md-12">
        <div className="first-row row">
          {techs.map((tech, i) =>
            <div key={i} className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-brand">
                <img src={images[tech.replace('#', "").replace(/\s/g, "_").toLowerCase() + '_logo']} alt="Brand-1 " />
                <div className='tech-name'>
                  {tech}
                </div>
              </div>
            </div>
          )}
        </div >
      </div >
    )
  }

  const experienceInfo = () => {
    let yearsOfexperience = '3+'
    return (
      <div className="col-xl-6 col-lg-12 col-md-12">
        <div className="experience-area">
          <div className="bg-panel"></div>
          <div className="d-flex flex-row years-area">
            <h2 className="p-3 years">{yearsOfexperience}</h2>
            <h2 style={{
              paddingLeft: 10
            }}>
              <span>Years</span>
              <span>Experience</span>
            </h2>
          </div>
          <div className="d-flex flex-row flex-wrap call-area">
            <h2 style={{
              font: 'normal bold 50px/70px "Roboto", Roboto',
              color: '#006688'
            }}>
              <span></span>
              <span>I love</span>
              <span>Work with</span>
            </h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id='Development' className="brand-area">
      <div className="container-fluid">
        <div className="row">
          {experienceInfo()}
          {techRows()}
        </div>
      </div>
    </section>
  );
}

export default TechArea;