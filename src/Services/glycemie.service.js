import axios from "axios";
import dateFormat from "./date.format.js";
import authHeader from "./auth.header.js";

const API_URL = 'http://localhost:8000/api';
class GlycemieService{

    addObjectifGlycemie(glucoseMin, glucoseMax, glucoseMinF, glucoseMaxF){

        const userId = localStorage.getItem("userId");

        return axios.post(API_URL + '/glucose_goals', {
            glucoseMin,
            glucoseMax,
            glucoseMinF,
            glucoseMaxF,
            users : [`api/users/${userId}`]
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

    getRate(startdate, enddate){

        const userId = localStorage.getItem("userId");

        return axios.get(API_URL + `/glucose/glucose_btw/${userId}/${startdate}/${enddate}`, { headers: authHeader() })
            .then(response => {
                console.log(response);
            })

    }
}

export default new GlycemieService();