import GlycemieGoalForm from "../../Form/GlycemieForm/GlycemieGoalForm.jsx";
import GlycemieForm from "../../Form/GlycemieForm/GlycemieForm.jsx";

export default function Glycemie(){
    return(
        <div className={"pt-15 pl-12"}>
            <h2 className={"w-fit uppercase text-3xl font-bold border-b-4 border-sugar-blood"}>Glycémie</h2>
            <GlycemieGoalForm />
            <GlycemieForm />
        </div>
    )
}