import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home/Home.jsx";
import LoginForm from "../../Form/LoginForm/LoginForm.jsx";
import RegisterForm from "../../Form/RegisterForm/RegisterForm.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

export default function LayoutHome(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/login"} element={<LoginForm />} />
                <Route path={"/register"} element={<RegisterForm />} />
            </Routes>
        </div>
    )
}