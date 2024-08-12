import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customer";
class CustomerService{
    saveCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL+"/addcustomer",customer);
    }

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL+"/getcustomers");
    }

    deleteCustomer(id){
        return axios.delete(CUSTOMER_API_BASE_URL + "/delete/" + id);
    }

    getCustomerById(id){
        return axios.get(CUSTOMER_API_BASE_URL + "/getcustomer/" + id);
    }

    updateCustomer(customer,id){
        return axios.put(CUSTOMER_API_BASE_URL + "/updatecustomer/" + id,customer);
    }
}

export default new CustomerService();