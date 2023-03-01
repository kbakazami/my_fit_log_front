import LayoutDashboard from "./Layout/LayoutDashboard/LayoutDashboard.jsx";
import LayoutHome from "./Layout/LayoutHome/LayoutHome.jsx";
import {useEffect, useState} from "react";
import {Navigate, redirect, useNavigate} from "react-router-dom";

function App() {

    const [user, setUser] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user){
            navigate("/");
        }else{
            navigate("/dashboard");
        }
    },[user])

    if(user){
        return (
            <>
                <div className={"app"}>
                    <LayoutDashboard />
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className={"app"}>
                    <LayoutHome />
                </div>
            </>
        )
    }

}



export default App
