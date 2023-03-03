import axios from "axios";


const API_URL = 'http://localhost:8000/api';
class AlimentationService{

    addObjectifByDay(numberMeals, calorie, waterIntake, water){

        const userId = localStorage.getItem("userId");

        return axios.post(API_URL + '/meal_goal_days', {
            numberMeals,
            calorie,
            waterIntake,
            water,
            user : [`api/users/${userId}`]
        }, {headers: {
                "Content-Type" : "application/json",
            }})
    }
}

export default new AlimentationService();