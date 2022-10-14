import Email from "../img/mail.png"
import Linkedin from "../img/linkedin.png"
const Header = () => {
    return ( 
        <header className="header">
            <h1 className="header-title">Laura Smith</h1>
            <h3 className="header-subtitle">Frontend Developer</h3>
            <h5 className="header-subsubtitle">laurasmioth.website</h5>
            <div className="socials">
                <div className="social">
                    <img 
                        src={Email} 
                        alt="email icon" className="social-icon"/>
                    Email
                </div>
                <div className="social">
                    <img 
                        src={Linkedin} 
                        alt="linkedin icon" className="social-icon"/>
                    Linkedin
                </div>
            </div>
        </header>
     );
}
 
export default Header;
<header className="header">

</header>