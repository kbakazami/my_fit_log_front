import axios from 'axios';
import dateFormat from "./date.format.js";
import bcrypt from "bcryptjs";

const API_URL = 'http://localhost:8000/api';
const salt = bcrypt.genSaltSync(10);

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

    register(password, email, lastname, firstname, birthdate) {

        return axios.post(API_URL + '/register', {
            password : bcrypt.hashSync(password, salt),
            email,
            lastname,
            firstname,
            birthdate,
            createdAt : dateFormat.formatDate(),
            accesAt : dateFormat.formatDate(),
            isActive: true
        }, {headers: {
                "Content-Type" : "application/json",
            }})
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();


