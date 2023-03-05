import React from 'react';
import { useForm } from 'react-hook-form';
import alimentationService from "../../Services/alimentation.service.js";

export default function DailyGoalForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            alimentationService.addObjectifByDay(
                parseInt(data.numberMeals),
                parseInt(data.calorie),
                parseFloat(data.waterIntake),
                parseFloat(data.water)
            );
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <form id={"form-daily-goal"} className={"flex flex-col w-[500px]"} onSubmit={handleSubmit(onSubmit)}>
            {errors.numberMeals && <p className="errors-form" role="alert">Veuillez choisir votre nombre de repas</p>}
            <select {...register("numberMeals", { required: true })}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            {errors.calorie && <p className="errors-form" role="alert">Veuillez entrer votre objectif calorique</p>}
            <input className={"border border-green-500"} type="number" placeholder="Calorie totales" {...register("calorie", {required: true})} />

            {errors.waterIntake && <p className="errors-form" role="alert">Veuillez entrer votre apport d'eau (nourriture)</p>}
            <input className={"border border-green-500"} type="text" placeholder="Apport en eau nourriture (Litres)" {...register("waterIntake", {required: true})} />

            {errors.water && <p className="errors-form" role="alert">Veuillez entrer votre objectif d'eau journalier</p>}
            <input className={"border border-green-500"} type="text" placeholder="Eau journalière (Litres) *" {...register("water", {required: true})} />

            <p>*le minimum conseillé est 2L d'eau par jour</p>
            <input className={"border border-green-500"} type="submit" />
        </form>
    );
}
