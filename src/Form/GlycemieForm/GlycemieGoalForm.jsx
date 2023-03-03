import React from 'react';
import { useForm } from 'react-hook-form';
import glycemieService from "../../Services/glycemie.service.js";

export default function GlycemieGoalForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            glycemieService.addObjectifGlycemie(
                parseFloat(data.glucoseMin),
                parseFloat(data.glucoseMax),
                parseFloat(data.glucoseMinF),
                parseFloat(data.glucoseMaxF)
            );
        }catch (e){
            console.log(e);
        }
    };

    return (
        <form id={'form-glycemie-goal'} className={"flex flex-col"} onSubmit={handleSubmit(onSubmit)}>
            {errors.glucoseMin && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie minimal à jeun</p>}
            <input type="number" placeholder="glucoseMin" {...register("glucoseMin", {required: true})} />

            {errors.glucoseMax && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie maximal à jeun</p>}
            <input type="number" placeholder="glucoseMax" {...register("glucoseMax", {required: true})} />

            {errors.glucoseMinF && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie minimal après-repas</p>}
            <input type="number" placeholder="glucoseMinF" {...register("glucoseMinF", {required: true})} />

            {errors.glucoseMaxF && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie minimal après-repas</p>}
            <input type="number" placeholder="glucoseMaxF" {...register("glucoseMaxF", {required: true})} />

            <input type="submit" />
        </form>
    );
}