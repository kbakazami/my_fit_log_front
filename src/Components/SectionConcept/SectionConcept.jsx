export default function SectionConcept(props){
    return(
        <div className={"border-2 min-h-[200px] border-tertiary rounded-xl px-4 py-5"}>
            <div className={"flex flex-row justify-center gap-x-1 sm:gap-x-2.5 items-center"}>
                <img src={props.img} alt={props.alt} className={"h-10 w-10"} />
                <h3 className={"uppercase font-bold text-xl lg:text-2xl text-center"}>{props.title}<span className={"text-tertiary"}>{props.titleKey}</span></h3>
                <img src={props.img} alt={props.alt} className={"h-10 w-10"} />
            </div>
            <p className={"text-center mt-2 px-6"}>
                {props.children}
            </p>
        </div>
    )
}