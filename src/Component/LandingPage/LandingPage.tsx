import { useContext } from 'react'
import './LandingPage.css';
import mailiconl from '../../assets/mail-icon.png';
import mailicond from '../../assets/mail-d.png';
import githubiconl from '../../assets/github-icon.png';
import githubicond from '../../assets/github-d.png';
import linkediniconl from '../../assets/linkedin-icon.png';
import linkedinicond from '../../assets/linkedin-d.png';
import { ThemeContext } from '../../Theme/Theme';
import avtar from '../../assets/avtar.png';

const LandingPage = () => {
  const {isLightMode}=useContext(ThemeContext);
  let mailicon,githubicon,linkedinicon;
  if(!isLightMode){
    mailicon=mailicond;
    githubicon=githubicond;
    linkedinicon=linkedinicond;
  }else{
    mailicon=mailiconl;
    githubicon=githubiconl;
    linkedinicon=linkediniconl;
  }
  return (
    <div className='landingpage-container'>
       <div className='landingpage-sidebar'>
          <div className='landingpage-sidebar-items'>
            {isLightMode? <div className='line1'></div>:<div className='line1-dark'></div>}
            <div className='sidebar-icons'>
              <a href="mailto:kumararyanaim@gmail.com"><img className="mail-icon" src={mailicon} alt='mail-icon' /></a>
              <a href="https://github.com/Kumar-Aryan-NIET"><img className="github-icon" src={githubicon} alt='github-icon' /></a>
              <a href="https://www.linkedin.com/in/kumar-aryan-75a659259/"><img className="linkedin-icon" src={linkedinicon} alt='linkedin-icon' /></a>
            </div>
            {isLightMode ? <div className='line2'></div> : <div className='line2-dark'></div>}
          </div>
        </div>
        <div className='landingpage-main'>
          <div className={isLightMode ? 'landingpage-main-text' : 'landingpage-main-text dark-font'}>
            <h1>Hi, I'm Kumar Aryan</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className='landingpage-image-container'>
          
            {/* <div className='landingpage-image-internal'>  */}
              {/* <img src={avtar} alt='profile' /> */}
          {/* </div> */}
          </div>
        </div>
    </div>
  )
}

export default LandingPage