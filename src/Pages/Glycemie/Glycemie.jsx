import GlycemieGoalForm from "../../Form/GlycemieForm/GlycemieGoalForm.jsx";
import GlycemieForm from "../../Form/GlycemieForm/GlycemieForm.jsx";

export default function Glycemie(){
    return(
        <div>
            <h1 className={"uppercase"}>Glycémie</h1>
            <GlycemieGoalForm />
            <GlycemieForm />
        </div>
    )
}