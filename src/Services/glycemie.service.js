import axios from "axios";
import dateFormat from "./date.format.js";

const API_URL = 'http://localhost:8000/api';
class GlycemieService{

    addObjectifGlycemie(glucoseMin, glucoseMax, glucoseMinF, glucoseMaxF){

        const userId = localStorage.getItem("userId");

        return axios.post(API_URL + '/glucose_goals', {
            glucoseMin,
            glucoseMax,
            glucoseMinF,
            glucoseMaxF,
            user : [`api/users/${userId}`]
        }, {headers: {
                "Content-Type" : "application/json",
            }})
    }

    addRate(rate, isFasting){

        const userId = localStorage.getItem("userId");

        return axios.post(API_URL + '/glucoses', {
            rate,
            isFasting,
            createdAt : dateFormat.formatDate(),
            user : `api/users/${userId}`
        })
    }
}

export default new GlycemieService();