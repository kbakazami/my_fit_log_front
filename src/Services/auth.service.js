import axios from 'axios';
import {redirect} from "react-router-dom";

const API_URL = 'http://localhost:8000/api';

class AuthService {
    login(username, password) {
        return axios.post(API_URL + '/login', {
            username,
            password
        }, {headers: {
            "Content-Type" : "application/json"
            }})
            .then(response => {
                console.log(response.data)
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                window.location.assign("/");
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username, password, email, lastname, firstname, birthdate) {
        return axios.post(API_URL + '/register', {
            password,
            email,
            lastname,
            firstname,
            birthdate,
            createdAt : Date.now(),
            accesAt : Date.now(),
            isActive: true
        }, {headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }})
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();