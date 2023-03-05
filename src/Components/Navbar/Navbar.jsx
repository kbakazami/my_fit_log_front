import React, {useEffect, useState} from 'react'
import {Link, NavLink, redirect} from "react-router-dom";
import AuthService from "../../Services/auth.service.js";
import myFitLogo from "../../Pages/Home/images/logo.png";
import {
    BurgerIcon,
    ComptePerso, CrossIcon,
    HealthyFood,
    LogoutIcon,
    Settings,
    SugarBlood
} from "../SvgComponents/SvgComponents.jsx";

export default function Navbar() {

    const [isDisplay, setIsDisplay] = useState(false);

    const logout = () => {
        AuthService.logout();
        window.location.assign("/");
    }

    const toggleNav = () => {
        setIsDisplay(!isDisplay);
        console.log(isDisplay);
    }

    return (
        <div className={"bg-primary w-full lg:w-fit text-white"}>
            <div className={"flex flex-row justify-center lg:hidden relative py-4"}>

                {!isDisplay ?
                        <button className={"absolute left-4 burger-icon"} onClick={toggleNav}>
                            <BurgerIcon className={"w-8 h-8"} />
                        </button>
                        :
                        <button className={"absolute left-4 close-icon"} onClick={toggleNav}>
                            <CrossIcon className={"w-8 h-8"} />
                        </button>
                }

                <div className={"flex flex-row items-center"}>
                    <Link to="/">
                        <div className={"h-8 w-8"}>
                            <img src={myFitLogo} alt={"My Fit Log"} className={"w-full h-full bg-contain bg-no-repeat"}/>
                        </div>
                    </Link>
                    <h3 className={"uppercase text-xl ml-3.5 font-bold border-b-4 border-tertiary"}>Fit my log</h3>
                </div>
            </div>
            <nav className={`${isDisplay ? '' : 'hidden'} lg:flex flex-col h-screen bg-primary pl-6 lg:py-15 w-full lg:w-[300px]`}>
                <div className={"hidden lg:flex flex-row items-center"}>
                    <Link to="/">
                        <div className={"h-12 w-12"}>
                            <img src={myFitLogo} alt={"My Fit Log"} className={"w-full h-full bg-contain bg-no-repeat"}/>
                        </div>
                    </Link>
                    <h3 className={"uppercase text-2xl ml-3.5 font-bold border-b-4 border-tertiary"}>Fit my log</h3>
                </div>
                <div className={"flex flex-col lg:justify-between h-full mt-5 lg:mt-17 text-base"}>
                    <ul>
                        <li className={"mb-2"}>
                            <NavLink className={"btn-nav"} to={"/alimentation"}>
                              <HealthyFood className={"w-7 h-7"} />
                                Alimentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={"btn-nav"} to={"/glycemie"}>
                              <SugarBlood className={"w-7 h-7"} />
                                Glycémie
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={"mt-14 lg:mt-0"}>
                        <li className={"mb-2"}>
                            <NavLink className={"btn-nav"} to={"/dashboard"}>
                               <ComptePerso className={"w-6 h-6"} />
                                Nom personne connectée
                            </NavLink>
                        </li>
                        <li className={"mb-2"}>
                            <NavLink className={"btn-nav"} to={"/settings"}>
                               <Settings className={"w-6 h-6"} />
                                Paramètres
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={logout} className={"btn-nav hover:underline"}>
                                <LogoutIcon className={"w-7 h-7"} />
                                Se déconnecter
                            </button>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}