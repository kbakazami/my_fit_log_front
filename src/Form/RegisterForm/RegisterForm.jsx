import {useForm} from "react-hook-form";
import authService from "../../Services/auth.service.js";
import '../LoginForm/LoginForm.scss';
import {Link} from "react-router-dom";
import myFitLogo from "../../Pages/Home/images/logo.png";
import {CakeIcon, ChevronRightIcon, EmailIcon, LockIcon, UserIcon} from "../../Components/SvgComponents/SvgComponents";

export default function RegisterForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            authService.register(data.password, data.email, data.lastname, data.firstname, data.birthdate);
        }catch (e) {
            console.log(e);
        }

    };
    return(
        <div className={"flex flex-row min-h-screen relative mb-10 lg:mb-0"}>
            <Link className={"text-white h-12 w-12 absolute left-5 lg:left-10 top-8"} to={"/"}>
                <img src={myFitLogo} alt={"My Fit Log"} className={"w-full h-full bg-contain bg-no-repeat"}/>
            </Link>
            <div className={"flex gap-x-3 items-center absolute top-8 right-5 lg:right-10"}>
                <Link className={"text-primary hover:underline underline-offset-8"} to={"/register"}>
                    Inscription
                </Link>
                <Link className={"btn btn-inverted mobile"} to={"/login"}>
                    Connexion
                </Link>
            </div>
            <div className={"w-full lg:w-3/5 flex mt-24 lg:mt-0 px-4"}>
                <div id="form-register-container"
                     className={"form-container border border-primary w-full lg:w-7/12 m-auto px-10 py-4 lg:py-9 rounded-xl"}>
                    <div className={"mb-10"}>
                        <h3 className={"w-fit mx-auto uppercase border-b-4 border-primary font-bold text-xl lg:text-2xl mb-6"}>
                            Nouvel utilisateur ?
                        </h3>
                        <Link className={"btn btn-tertiary w-fit mx-auto text-center py-2.5 gap-x-1 text-white"} to={"/login"}>
                            <ChevronRightIcon className={"w-7 h-7"}/>
                            Vous avez un compte ?
                        </Link>
                    </div>
                    <div className={"text-center"}>
                        <h3 className={"w-fit mx-auto uppercase border-b-4 border-primary font-bold text-xl lg:text-2xl"}>
                            Créer un nouveau compte
                        </h3>
                        <form id="form-register" onSubmit={handleSubmit(onSubmit)}
                              className={"flex flex-col gap-y-5 mt-7 form-login text-tertiary"}>

                            <div className={"flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-2.5"}>
                                <div>
                                    <div className={"relative"}>
                                        <input type="text" placeholder="Nom" {...register("lastname", {required: true, maxLength: 100})} />
                                        <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                            <UserIcon className={"w-5 h-5"}/>
                                        </div>
                                    </div>
                                    {errors.lastname && <p className="errors-form">Veuillez saisir un nom</p>}
                                </div>

                                <div>
                                    <div className={"relative"}>
                                        <input type="text" placeholder="Prénom" {...register("firstname", {required: true, maxLength: 80})} />
                                        <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                            <UserIcon className={"w-5 h-5"}/>
                                        </div>
                                    </div>
                                    {errors.firstname && <p className="errors-form">Veuillez saisir un prénom</p>}
                                </div>
                            </div>

                            <div>
                                <div className={"relative"}>
                                    <input type="email" placeholder="Adresse email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                                    <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                        <EmailIcon className={"w-5 h-5"}/>
                                    </div>
                                </div>
                                {errors.email && <p className="errors-form">Veuillez saisir un email</p>}
                            </div>

                            <div>
                                <div className={"relative"}>
                                    <input type="date" placeholder="Date de naissance" {...register("birthdate", {required: true})} />
                                    <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                        <CakeIcon className={"w-5 h-5"}/>
                                    </div>
                                </div>
                                {errors.birthdate && <p className="errors-form">Veuillez saisir une date de naissance</p>}
                            </div>

                            <div>
                                <div className={"relative"}>
                                    <input type="password" placeholder="Mot de passe" {...register("password", {required: true})} />
                                    <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                        <LockIcon className={"w-5 h-5"}/>
                                    </div>
                                </div>
                                {errors.password && <p className="errors-form">Veuillez saisir un mot de passe</p>}
                            </div>
                            {/*{errors.passwordVerification && <p className="errors-form">Verification is required</p>}*/}
                            {/*<input type="password" placeholder="Password Verification" {...register("passwordVerification", {required: true})} />*/}

                            <button className={"btn btn-tertiary empty w-fit mx-auto"} type="submit">
                                Créer le compte
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={"hidden lg:flex w-2/5 login-register-bg text-right rounded-tl-xl rounded-bl-xl relative"}>
                <div className={"flex gap-x-3 items-center absolute top-8 right-10"}>
                    <Link className={"text-white hover:underline underline-offset-8"} to={"/register"}>
                        Inscription
                    </Link>
                    <Link className={"btn btn-inverted"} to={"/login"}>
                        Connexion
                    </Link>
                </div>
                <h1 className={"uppercase font-bold text-white text-4xl mb-32 mt-auto mr-17"}>
                    Suivez votre santé avec <span className={"italic"}>MyFitLog</span>
                </h1>
            </div>
        </div>
    )
}