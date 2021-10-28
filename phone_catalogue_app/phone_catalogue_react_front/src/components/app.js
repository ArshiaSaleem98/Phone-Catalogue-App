import BannerOne from './home-page-banner';
import FooterOne from './home-page-footer';
import BannerTwo from "./contact-page-banner";
import SectionTwo from "./contact-page-section";
import FooterTwo from "./contact-page-footer";
import BannerThree from "./product-page-banner";
import SectionThree from "./product-page-section";
import ListPhoneComponent from './ListPhoneComponent';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
    <header className>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to={"/"}><h2>Mobile Store</h2></Link><h2>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/home"}>Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </h2></div>
    </nav>
  </header>
)
};
const Home = () => {
	return (
    <div>
    <Header/>
    <BannerOne/>
    <ListPhoneComponent/>
    <FooterOne/>
    
    {/* Footer Starts Here */}
   
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
              Copyright © 2020 Company Name
              - Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
	)
};

const Contact = () => {
	return (
    <div>
      <Header/>
      <BannerTwo/>
      <SectionTwo/>
      <FooterTwo/>
    </div>
)
};

const PhoneDetails= () => {
	return (
    <div>
      <Header/>
      <BannerThree/>
      <SectionThree/>
      <FooterOne/>
    </div>
   
)
};

export {Home , Contact,PhoneDetails} 