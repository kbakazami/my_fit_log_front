import DailyGoalForm from "../../Form/AlimentationForm/DailyGoalForm.jsx";
import DinerForm from "../../Form/AlimentationForm/DinerForm.jsx";

export default function Alimentation()
{
    return(
        <div>
            <h1 className={"uppercase"}>Mon Alimentation</h1>
            <DailyGoalForm />
            <DinerForm />
        </div>
    )
}