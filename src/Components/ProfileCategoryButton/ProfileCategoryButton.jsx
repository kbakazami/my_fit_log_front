import {NavLink} from "react-router-dom";

export default function ProfileCategoryButton(props){
    return(
        <div className={`btn-category ${props.className}`}>
            {props.children}
            <p>{props.name}</p>
        </div>
    )
}