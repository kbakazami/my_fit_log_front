export default function SectionConcept(props){
    return(
        <div className={"border-2 w-[48%] min-h-[200px] border-tertiary rounded-xl px-4 pt-5"}>
            <div className={"flex justify-center gap-x-2 items-center"}>
                <img src={props.img} alt={props.alt} />
                <h3 className={"uppercase font-bold text-2xl text-center"}>{props.title}<span className={"text-tertiary"}>{props.titleKey}</span></h3>
                <img src={props.img} alt={props.alt} />
            </div>
            <p className={"text-center mt-2"}>
                {props.children}
            </p>
        </div>
    )
}