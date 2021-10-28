import React from "react";
function FooterOne() {
return (
<footer>
   <div className="container">
      <div className="row">
         <div className="col-md-3 footer-item">
         </div>
         <div className="col-md-3 footer-item">
            <h4>Mobile Store</h4>
            <p>Discover our smarphones catalog and take advantage of our special offers.</p>
            <ul className="social-icons">
               <li><a rel="nofollow" href="https://www.facebook.com/dcslguidesmiths/" target="_blank"><i className="fa fa-facebook" /></a></li>
               <li><a href="https://twitter.com/dcslguidesmiths"><i className="fa fa-twitter" /></a></li>
               <li><a href="https://www.linkedin.com/company/dcsl-guidesmiths"><i className="fa fa-linkedin" /></a></li>
            </ul>
         </div>
         <div className="col-md-3 footer-item last-item">
            <h4>Contact Us</h4>
            <ul className="menu-list">
               <li><a href="#"></a></li>
               <li><a className="section-heading"href="#"><em>+34 20 3096 6199</em>
                  </a>
               </li>
               <li><a className="section-heading"href="#"><em>webenquiries@dcsl.com</em>
                  </a>
               </li>
               <li><a className="section-heading"href="#"><em>P.º de la Castellana, España.</em>
                  </a>
               </li>
            </ul>
         </div>
         <div className="col-md-3 footer-item last-item">
         </div>
      </div>
   </div>
</footer>
)
}
export default FooterOne