import React from 'react';
import { useForm } from 'react-hook-form';
import GlycemieService from "../../Services/glycemie.service.js";

export default function GlycemieForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            GlycemieService.addRate(parseFloat(data.rate), data.isFasting)
        }catch (e){
            console.log(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.rate && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie</p>}
            <input type="number" placeholder="rate" {...register("rate", {required: true})} />
            <input type="checkbox" placeholder="isFasting" {...register("isFasting", {})} />

            <input type="submit" />
        </form>
    );
}