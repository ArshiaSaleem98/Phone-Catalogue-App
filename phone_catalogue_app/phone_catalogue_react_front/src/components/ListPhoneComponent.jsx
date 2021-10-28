import React,{Component} from "react";
import phoneService from "../services/phoneService";
import { Link } from 'react-router-dom';
import axios from "axios";

class ListPhoneComponent extends Component{
  state = {
    phones: [],
    page: 0,
    showPreloader:false,
    isLoading: false,
    isHide:false,
    errorMsg: ''
  };

  componentDidMount() {
    this.setState({ showPreloader: true});
    this.setState({ isHide: true});
    this.loadPhones();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadPhones();
    }
  }
  
  loadPhones = async () => {
    try {
      const { page } = this.state;

      this.setState({ isLoading: true });
      const response = await phoneService.getPhones(page,3);
            this.setState({ isHide: false});

      if(!Object.keys(response.data).length){
        this.setState({ isHide: true });
      }

      this.setState((prevState) => ({
        phones: [...prevState.phones, ...response.data],
        errorMsg: ''
      }));
    } catch (error) {
      this.setState({
        errorMsg: 'Error while loading data. Try again later.'
      });
    } finally {
      this.setState({ isLoading: false });
      this.setState({ showPreloader: false});


    }
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }));
  };

  render() {
    const { phones, isLoading,isHide,showPreloader } = this.state;

    return (
      <div className="services">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Featured <em>Products</em></h2>
            </div>
          </div>
          <div className="row">
          {
                phones.map(
                    phone=>
                    <div className="col-md-4">
                    <div className="service-item">
                      <img src={"assets/images/"+phone.imageFileName} alt="" />
                      <div className="down-content" >
                        <h4 key={phone.id}></h4>
                        <div style={{marginBottom: '0px',textAlign:'center'}}>
                          <span>
                           {phone.name}  &nbsp; <br/><h6>{phone.price+ "€"}</h6>
                          </span>
                        </div>
                        <div style={{marginBottom: '10px',textAlign:'center'}}>
                        <Link to={"/phoneDetails/" + phone.id} className="filled-button2">View More</Link>
                        </div>

                      </div>
                    </div>
                    <br />
                  </div>
                )
            }
            <div id="preloader" style={showPreloader? {display: 'block'} : { display: 'none' }}>
                 <div class="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                 </div>
          <div className="load-more-div" style={isHide ? {display: 'none'} : { display: 'block' }}>
         
      <a id="loadMoreBtn" onClick={this.loadMore} > {isLoading ? 'Loading...' : 'Load More'}</a>  
    </div>
          
          </div>
        </div>
      </div>
    </div>
  );
  }
}
export default ListPhoneComponent