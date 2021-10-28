import http from "../http-common";
class PhoneService{
  
    getPhones(page,size){
        return http.get(`/phones?page=${page}&page_size=${size}`);
    }
    get(id){
      return http.get(`/phoneDetails/${id}`);
    }
}
export default new PhoneService()