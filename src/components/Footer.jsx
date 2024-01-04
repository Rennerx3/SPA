import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { scroller } from 'react-scroll';


const Footer = forwardRef((props,ref) => {

    const handleButtonClickA = () => {  
        setTimeout( () => {
            scroller.scrollTo('about', {
              smooth: true,
              duration: 500,
            });
        },100)}
    
    const handleButtonClickS = () => {  
        setTimeout( () => {
            scroller.scrollTo('solutions', {
              smooth: true,
              duration: 500,
            });
        },100)}
    
    const handleButtonClickC = () => {  
        setTimeout( () => {
            scroller.scrollTo('contact', {
              smooth: true,
              duration: 500,
            });
        },100)  
      };

    return ( 
        <div ref={ref} className="footerDiv">
            <div className="links">
                <Link onClick={handleButtonClickA}>ABOUT</Link>
                <Link onClick={handleButtonClickS}>SOLUTIONS</Link>
                <Link onClick={handleButtonClickC}>CONTACT</Link>
            </div>
            <p>Created by: Renato Mokosce Kinley "Rennerx3"</p>
        </div>
     );
})
 
export default Footer;