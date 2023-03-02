import {Routes, Route, Navigate} from "react-router-dom";
import Alimentation from "../../Pages/Alimentation/Alimentation.jsx";
import Glucose from "../../Pages/Glucose/Glucose.jsx";
import Dashboard from "../../Pages/Dashboard/Dashboard.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

export default function LayoutDashboard(){

    return(
        <div className={"flex flex-col lg:flex-row"}>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/alimentation"} element={<Alimentation />} />
                <Route path={"/glycemie"} element={<Glucose />} />
            </Routes>
        </div>
    )
}