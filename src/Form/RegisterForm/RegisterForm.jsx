import {useForm} from "react-hook-form";
import authService from "../../Services/auth.service.js";

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
        <div>
            <div id="form-register-container" className="form-container">
                <h2>Register</h2>
                <form id="form-register" onSubmit={handleSubmit(onSubmit)}>

                    {errors.firstName && <p className="errors-form">Firstname is required</p>}
                    <input type="text" placeholder="First name" {...register("firstname", {required: true, maxLength: 80})} />
                    {errors.lastName && <p className="errors-form">Lastname is required</p>}
                    <input type="text" placeholder="Last name" {...register("lastname", {required: true, maxLength: 100})} />
                    {errors.email && <p className="errors-form">email is required</p>}
                    <input type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                    {errors.birthdate && <p className="errors-form">Birthdate is required</p>}
                    <input type="date" placeholder="Birthdate" {...register("birthdate", {required: true})} />
                    {errors.password && <p className="errors-form">Password is required</p>}
                    <input type="password" placeholder="Password" {...register("password", {required: true})} />
                    {/*{errors.passwordVerification && <p className="errors-form">Verification is required</p>}*/}
                    {/*<input type="password" placeholder="Password Verification" {...register("passwordVerification", {required: true})} />*/}

                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}