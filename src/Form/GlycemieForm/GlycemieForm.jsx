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
        <div className={"border border-sugar-blood rounded-xl px-7 py-3.5 mx-auto mt-15 w-full lg:w-fit"}>
            <h3 className={"text-2xl font-bold border-b-4 border-sugar-blood uppercase w-fit mx-auto"}>
                Taux de glycémie
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col form-category sugar-blood mt-5 mx-auto"}>
                {errors.rate && <p className="errors-form" role="alert">Veuillez entrer votre taux de Glycémie</p>}
                <input type="number" placeholder="Taux(g/L)" {...register("rate", {required: true})} />
                <div className={"flex flex-row items-center gap-x-2 mt-3.5"}>
                    <input type="checkbox" placeholder="isFasting" {...register("isFasting", {})} />
                    <label>A jeûn</label>
                </div>

                <button type="submit" className={"btn btn-sugar-blood empty w-fit mx-auto mt-5"}>
                    Enregistrer
                </button>
            </form>
        </div>

    );
}