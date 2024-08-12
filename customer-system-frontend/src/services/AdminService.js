import axios from "axios";

const ADMIN_API_BASE_URL = "http://localhost:8080/admin";
class AdminService {
  signUp(admin) {
    return axios.post(`${ADMIN_API_BASE_URL}/signup`, admin);
  }

  login(admin) {
    return axios.post(`${ADMIN_API_BASE_URL}/login`, admin);
  }
}

export default new AdminService();
