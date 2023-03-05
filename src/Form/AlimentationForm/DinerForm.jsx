import React from 'react';
import { useForm } from 'react-hook-form';

export default function DinerForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className={"bg-primary flex flex-col mt-5"} onSubmit={handleSubmit(onSubmit)}>
            {errors.calorie && <p className="errors-form" role="alert">Veuillez entrer votre objectif calorique</p>}
            <select {...register("meal", { required: true })}>
                <option value="Petit-Déjeuner">Petit-Déjeuner</option>
                <option value="Déjeuner">Déjeuner</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            {errors.calorie && <p className="errors-form" role="alert">Veuillez entrer votre objectif calorique</p>}
            <select {...register("food", { required: true })}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            {errors.calorie && <p className="errors-form" role="alert">Veuillez entrer votre objectif calorique</p>}
            <input type="number" placeholder="quantity" {...register("quantity", {required: true})} />

            <input type="submit" />
        </form>
    );
}