import Navbar from "../../Components/Navbar/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Alimentation from "../Alimentation/Alimentation.jsx";
import Glucose from "../Glucose/Glucose.jsx";

export default function Dashboard(){
    return(
       <div className={"flex"}>
            <main>
                Mon dashboard
            </main>
       </div>
    )
}