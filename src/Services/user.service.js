
import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "http://localhost:8000/api";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + "/all");
    }

    getUserBoard() {
        return axios.get(API_URL + "/me", { headers: authHeader() })
            .then(response => {
                if(response.data){
                    localStorage.setItem('userId', JSON.stringify(response.data.id));
                }
                return response.data.id;
                });
    }

}

export default new UserService();