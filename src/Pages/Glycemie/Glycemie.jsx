import GlycemieGoalForm from "../../Form/GlycemieForm/GlycemieGoalForm.jsx";
import GlycemieForm from "../../Form/GlycemieForm/GlycemieForm.jsx";
import ProfileCategoryButton from "../../Components/ProfileCategoryButton/ProfileCategoryButton";
import {ChartIcon, SugarBlood} from "../../Components/SvgComponents/SvgComponents";
import {useState} from "react";
import GlycemieGraph from "../../Components/Graphique/GlycemieGraph.jsx";

export default function Glycemie(){
    const [isSugarBloodDisplay, setIsSugarBloodDisplay] = useState(false);
    const [isRateDisplay, setIsRateDisplay] = useState(false);
    const [isChartDisplay, setIsChartDisplay] = useState(false);

    const showDefault = () => {
        setIsSugarBloodDisplay(!isSugarBloodDisplay);
        setIsRateDisplay(!isRateDisplay);
        setIsChartDisplay(!isChartDisplay);
    }

    const showRate = () => {
        setIsSugarBloodDisplay(!isSugarBloodDisplay);
        setIsRateDisplay(!isRateDisplay);
        setIsChartDisplay(!isChartDisplay);
    }

    const showCharts = () => {
        setIsSugarBloodDisplay(!isSugarBloodDisplay);
        setIsRateDisplay(!isRateDisplay);
        setIsChartDisplay(!isChartDisplay);
    }
    return(
        <div className={"pt-15 px-4 lg:pl-12 w-full"}>
            <h2 className={"w-fit uppercase text-3xl font-bold border-b-4 border-sugar-blood"}>Glycémie</h2>
            <div className={"flex flex-row flex-wrap gap-x-2.5 mt-7 mb-15"}>
                <button onClick={showDefault}>
                    <ProfileCategoryButton className={"btn-sugar-blood active"} name={"Glycémie"}>
                        <SugarBlood className={"w-7 h-7"}/>
                    </ProfileCategoryButton>
                </button>

                <button onClick={showRate}>
                    <ProfileCategoryButton className={"btn-sugar-blood"} name={"Ajouter son taux"}>
                        <SugarBlood className={"w-7 h-7"}/>
                    </ProfileCategoryButton>
                </button>

                <button onClick={showCharts}>
                    <ProfileCategoryButton className={"btn-sugar-blood"} name={"Comparer"}>
                        <ChartIcon className={"w-7 h-7"}/>
                    </ProfileCategoryButton>
                </button>
            </div>

                <GlycemieGoalForm />


                <GlycemieForm />


                <GlycemieGraph />
            

        </div>
    )
}