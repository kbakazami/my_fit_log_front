import authService from "../../Services/auth.service";
import {useForm} from "react-hook-form";
export default function LoginForm(onSubmit){
    const { register, handleSubmit, formState: { errors } } = useForm();
    onSubmit = data => {
        authService.login(data.username, data.password);
    };

    return (
        <div data-testid="form-login-container" id="form-login-container" className="form-container">
            <h2>Login</h2>
            <form id="form-login" data-testid="form-login" onSubmit={handleSubmit(onSubmit)}>

                {errors.username && <p className="errors-form" role="alert">Username is required</p>}
                <input data-testid="input-username" type="text" placeholder="Username" {...register("username", {required: true, maxLength: 50})} />
                {errors.password && <p className="errors-form" role="alert">Password is required</p>}
                <input data-testid="input-password" type="password" placeholder="Password" {...register("password", {required: true})} />

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}