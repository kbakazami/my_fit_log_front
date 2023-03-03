import {NavLink} from "react-router-dom";

export default function ProfileCategoryButton(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}