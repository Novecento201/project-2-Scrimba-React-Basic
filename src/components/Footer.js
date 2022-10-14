import Twitter from "../img/Twitter Icon.png"
import Facebook from "../img/Facebook Icon.png"
import Instagram from "../img/Instagram Icon.png"
import Github from "../img/GitHub Icon.png"


const Footer = () => {
    return ( 
        <footer className="footer">
            <img src={Twitter}  className="icon-footer" alt="icon-twitter" />
            <img src={Facebook}  className="icon-footer" alt="icon-facebook"/>
            <img src={Instagram}  className="icon-footer" alt="icon-instagram" />
            <img src={Github}  className="icon-footer" alt="icon-github" />       
        </footer>
     );
}
 
export default Footer;