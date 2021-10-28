import React from "react";
function SectionTwo(){
return (
<div>
   <div className="contact-information">
      <div className="container">
         <div className="row">
            <div className="col-md-4">
               <div className="contact-item">
                  <i className="fa fa-phone" />
                  <h4>Phone</h4>
                  <div className="section-heading">
                     <h5><em>+34 20 3096 6199</em></h5>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="contact-item">
                  <i className="fa fa-envelope" />
                  <h4>Email</h4>
                  <div className="section-heading">
                     <h5><em>webenquiries@dcsl.com</em></h5>
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className="contact-item">
                  <i className="fa fa-map-marker" />
                  <h4>Location</h4>
                  <div className="section-heading">
                     <h5><em>P.º de la Castellana, España</em></h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <br />
   <br />
   <br />
   <div id="map">
      {
      }
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27808.008496885606!2d-3.7310628387495055!3d40.44117915055716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262860f69a77%3A0xe6da29aaedb658e1!2sGuideSmiths%20Ltd!5e0!3m2!1ses!2suk!4v1635357825333!5m2!1ses!2suk" width="100%" height="500px" frameBorder={0} style={{border: 0}} allowFullScreen />
   </div>
</div>
);
}
export default SectionTwo