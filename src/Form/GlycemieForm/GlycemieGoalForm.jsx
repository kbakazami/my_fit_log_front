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
        <div className={"lg:w-7/12 border border-sugar-blood rounded-xl px-7 py-3.5 mx-auto mt-15"}>
            <h3 className={"text-2xl font-bold border-b-4 border-sugar-blood uppercase w-fit mx-auto"}>
                Taux de glycémie
            </h3>
            <form id={'form-glycemie-goal'} className={"flex flex-col form-category sugar-blood mt-5 mx-auto"} onSubmit={handleSubmit(onSubmit)}>
                <div className={"flex flex-col lg:flex-row justify-center items-center gap-x-7"}>
                    <div className={"flex flex-col gap-y-2.5 w-full lg:w-1/2"}>
                        <p className={"font-bold border-b-4 border-sugar-blood w-fit"}>A jeun</p>
                        {errors.glucoseMin && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie minimal à jeun</p>}
                        <input type="number" placeholder="Taux minimum" {...register("glucoseMin", {required: true})} />

                        {errors.glucoseMax && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie maximal à jeun</p>}
                        <input type="number" placeholder="Taux maximum" {...register("glucoseMax", {required: true})} />
                    </div>
                    <div className={"flex flex-col gap-y-2.5 w-full lg:w-1/2 mt-2.5 lg:mt-0"}>
                        <p className={"font-bold border-b-4 border-sugar-blood w-fit"}>Après avoir mangé</p>
                        {errors.glucoseMinF && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie minimal après-repas</p>}
                        <input type="number" placeholder="Taux minimum" {...register("glucoseMinF", {required: true})} />

                        {errors.glucoseMaxF && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie minimal après-repas</p>}
                        <input type="number" placeholder="Taux maximum" {...register("glucoseMaxF", {required: true})} />
                    </div>
                </div>
                <button type="submit" className={"btn btn-sugar-blood empty w-fit mx-auto mt-5"}>
                    Enregistrer
                </button>
            </form>
        </div>
    );
}