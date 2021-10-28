import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SectionThree() {

  const { id } = useParams();
  const url = `http://localhost:8080/api/v1/phoneDetails/${id}`;
  const [phone, setPhone] = useState({
    loading: false,
    data: null,
    error: false
  });

  let content = null;

  useEffect(() => {
    setPhone({
      loading: true,
      data: null,
      error: false
    }
    )
    axios.get(url)
      .then(response => {
        setPhone({
          loading: false,
          data: response.data,
          error: false
        })
      })
      .catch(() => {
        setPhone({
          loading: false,
          data: null,
          error: true
        })
      });
  }, [url]);

  if (phone.error) {

    content = <p>Error</p>
  }

  if (phone.loading) {
    content = <div id="preloader">
      <div class="jumper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  }

  if (phone.data) {

    content =  <div className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div>
            <img src={"/assets/images/"+phone.data.imageFileName} alt="" className="img-fluid wc-image" />
          </div>
          <br />
          <br />
        </div>
        <div className="col-md-5">
          <div className="sidebar-item recent-posts">
            <div className="sidebar-heading">
              <h4>{phone.data.name}</h4>
              <br/>
            </div>
            <div className="content">
              <h4>{phone.data.price+" €"}</h4>
            </div>
          </div>
          <br />
          <br/>
          <div className="section-heading" style={{textAlign:"left"}}>
              <h5><em>Other Specifications</em></h5>
              <br/>
              <div className="section-specification"> <h6>Manufacturer: <em>{phone.data.manufacturer}</em> </h6></div>
              <div className="section-specification"> <h6>Color: <em>{phone.data.color}</em> </h6></div>
              <div className="section-specification"> <h6>Camera: <em>{phone.data.camera}</em> </h6></div>
              <div className="section-specification"> <h6>Screen Resolution: <em>{phone.data.screen}</em> </h6></div>
              <div className="section-specification"> <h6>Processor: <em>{phone.data.processor}</em> </h6></div>
              <div className="section-specification"> <h6>Ram: <em>{phone.data.ram}</em> </h6></div>
              <div className="section-specification"> <h6>Operating System: <em>{phone.data.operatingSystem}</em> </h6></div>
             
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />

    </div>
  </div>
  }
  return (
    <div> {content}</div>

  )



}

export default SectionThree;