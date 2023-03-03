import authService from "../../Services/auth.service";
import {useForm} from "react-hook-form";
import './LoginForm.scss';
import {Link} from "react-router-dom";
import {ChevronRightIcon, LockIcon, UserIcon} from "../../Components/SvgComponents/SvgComponents";
import myFitLogo from "../../Pages/Home/images/logo.png";

export default function LoginForm(onSubmit){
    const { register, handleSubmit, formState: { errors } } = useForm();
    onSubmit = data => {
        try {
            authService.login(data.username, data.password);
        }catch (e){
            console.log(e);
        }
    };

    return (
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
                <div data-testid="form-login-container" id="form-login-container"
                     className={"form-container border border-primary w-full lg:w-7/12 m-auto px-10 py-4 lg:px-20 lg:py-9 rounded-xl"}>
                    <div className={"mb-10"}>
                        <h3 className={"w-fit mx-auto uppercase border-b-4 border-primary font-bold text-xl lg:text-2xl mb-6"}>
                            Nouvel utilisateur ?
                        </h3>
                        <Link className={"btn btn-tertiary w-fit mx-auto text-center py-2.5 gap-x-1 text-white"} to={"/register"}>
                            <ChevronRightIcon className={"w-7 h-7"}/>
                            Créer un nouveau compte
                        </Link>
                    </div>
                    <div className={"text-center"}>
                        <h3 className={"w-fit mx-auto uppercase border-b-4 border-primary font-bold text-xl lg:text-2xl"}>
                            Vous avez un compte ?
                        </h3>
                        <form id="form-login" data-testid="form-login" onSubmit={handleSubmit(onSubmit)}
                              className={"flex flex-col gap-y-5 mt-7 form-login text-tertiary"}>
                            <div>
                                <div className={"relative"}>
                                    <input className={"username"} data-testid="input-username" type="text" placeholder="Adresse email" {...register("username", {required: true, maxLength: 50})} />
                                    <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                        <UserIcon className={"w-5 h-5"}/>
                                    </div>
                                </div>
                                {errors.username && <p className="errors-form" role="alert">Veuillez saisir un email</p>}
                            </div>

                            <div>
                                <div className={"relative"}>
                                    <input data-testid="input-password" type="password" placeholder="Mot de passe" {...register("password", {required: true})} />
                                    <div className={"absolute left-4 inset-y-0 flex items-center"}>
                                        <LockIcon className={"w-5 h-5"}/>
                                    </div>
                                </div>
                                {errors.password && <p className="errors-form" role="alert">Veuillez saisir un mot de passe</p>}
                            </div>

                            <button className={"btn btn-tertiary empty w-fit mx-auto"} type="submit">Se connecter</button>
                        </form>
                        <p className={"text-tertiary underline-offset-8 mt-5 block"}>
                            Mot de passe oublié ?
                        </p>
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
    );
}
