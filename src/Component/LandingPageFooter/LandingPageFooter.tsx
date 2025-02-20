import React, { useContext } from 'react'
import './LandingPageFooter.css';
import { ThemeContext } from '../../Theme/Theme';
import leetcodeicon from '../../assets/leetcode.png';
import geekicon from '../../assets/geekforgeeks.png';
import hackerrankicon from '../../assets/hackerrank.png';

const LandingPageFooter: React.FC = () => {
  const {isLightMode} = useContext(ThemeContext);
  const scrollTo = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  }
  return (
    <div className='LandingPageFooter-container'>
      <div className='footer-canva-container'>
        <div className='footer-canva'>

        </div>
      </div>
      <div className='footer-scrolldown' onClick ={scrollTo}>
        {isLightMode ?
          <div>
            <div className='scrollelement'></div>
            <div className='scrollelement'></div>
            <div className='scrollelement'></div>
          </div> :
          <div>
            <div className='scrollelement' style={{borderRight:'2px solid white', borderBottom:'2px solid white'}}></div>
            <div className='scrollelement' style={{borderRight:'2px solid white', borderBottom:'2px solid white'}}></div>
            <div className='scrollelement' style={{borderRight:'2px solid white', borderBottom:'2px solid white'}}></div>
          </div>}
      </div>
      <div className='contest'> 
      <div className='footer-contest-container'>
        
        <div className={isLightMode ? 'contest-text': 'contest-text dark-font'}>
            Coding Profile
        </div>
        <div className='contest-img-container'>
            <div className='contest-img-box'><a href="https://leetcode.com/u/Kumar-Aryan-NIET/"><img className="leetcode-icon" src={leetcodeicon} alt="" /></a></div>
            <div className='contest-img-box'><a href="https://www.geeksforgeeks.org/user/code2execute/"><img className="geek-icon" src={geekicon} alt="" /></a></div>
            <div className='contest-img-box'><a href="https://www.hackerrank.com/profile/kumararyan993149"><img className="hackerrank-icon" src={hackerrankicon} alt="" /></a></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageFooter