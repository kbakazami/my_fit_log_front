import Button from "../../Components/Button/Button.jsx";
import SectionConcept from "../../Components/SectionConcept/SectionConcept.jsx";
import {Link} from "react-router-dom";
import "./Home.css";
import imgGraphique from "./images/graphique.svg";
import imgSleep from "./images/sleeping.svg";
import imgHealthy from "./images/healthy-food.svg";
import imgSport from "./images/sports.svg";

export default function Home(){
    return (
        <div>
            <header className={"cover-banner flex flex-col justify-between h-[800px] py-8 px-10"}>
                <div className={"flex justify-between items-center"}>
                    <div className={"text-white"}>
                        Logo
                    </div>
                    <div className={"flex gap-x-3 items-center"}>
                        <Link className={"text-white"} to={"/register"}>
                            Inscription
                        </Link>
                        <Link className={"text-white border border-white rounded-xl py-0.5 px-2 items-center hover:bg-white hover:bg-primary"} to={"/register"}>
                            Connexion
                        </Link>
                    </div>
                </div>
                <h1 className={"uppercase text-white text-3xl font-bold"}>Suivez votre santé avec MyFitLog</h1>
                <p className={"text-white text-center"}>Améliorez votre santé en surveillant votre activité physique, votre alimentation et votre sommeil grâce à notre application de surveillance de la santé. Visualisez vos progrès en temps réel avec nos graphiques et tableaux pour rester motivé et atteindre vos objectifs de santé et de condition physique.</p>
            </header>
            <main className={"container mx-auto"}>
                <section className={"mt-10"}>
                    <h2 className={"uppercase text-primary text-3xl text-center font-bold"}>Concept</h2>
                    <p className={"text-center mt-3"}>
                        Bienvenue sur <span className={"text-tertiary font-bold"}>MyFitLog</span>, l'application de surveillance de la santé qui vous accompagne dans votre parcours de bien-être et de condition physique. Nous avons créé cette application pour aider les utilisateurs à suivre leur santé et leur progression de manière simple et pratique
                        Voici quelques points de concept clés de notre application
                    </p>
                    <div className={"flex justify-center flex-wrap gap-8 mt-10"}>
                        <SectionConcept title={"Suivi de l'"} titleKey={"activité physique"} img={imgSport} alt={"sport"} >
                            MyFitLog permet aux utilisateurs de suivre leur activité physique en enregistrant le nombre de pas, la distance parcourue, les calories brûlées et bien plus encore. Les graphiques et tableaux de l'application vous aideront à visualiser vos progrès et à atteindre vos objectifs de condition physique.
                        </SectionConcept>

                        <SectionConcept title={"Suivi de l'"} titleKey={"alimentation"} img={imgHealthy} alt={"healthy"} >
                            L'application vous permet de suivre votre consommation de nourriture, de surveiller les calories, les nutriments et l'apport en eau. Vous pouvez également ajouter des photos de vos repas pour mieux suivre votre alimentation.
                        </SectionConcept>

                        <SectionConcept title={"Suivi du "} titleKey={"sommeil"} img={imgSleep} alt={"sleep"} >
                            MyFitLog vous aide à suivre votre sommeil, en enregistrant le temps de sommeil, la qualité du sommeil et les cycles de sommeil. Vous pourrez ainsi mieux comprendre votre sommeil et trouver des moyens pour améliorer votre qualité de sommeil.
                        </SectionConcept>

                        <SectionConcept title={"Visualisation des "} titleKey={"données"} img={imgGraphique} alt={"graphique"} >
                            L'application comprend des graphiques et tableaux pour vous aider à visualiser vos progrès. Vous pouvez personnaliser les tableaux en fonction de vos préférences pour mieux suivre vos mesures. Avec MyFitLog, vous pouvez suivre votre santé et votre condition physique en un seul endroit.
                        </SectionConcept>

                    </div>
                </section>

                <section>
                    <h2>A propos</h2>
                    <div>
                        <div>
                            Composant 01
                        </div>

                        <div>
                            Composant 02
                        </div>

                        <div>
                            Composant 03
                        </div>

                        <div>
                            Composant 04
                        </div>
                    </div>
                </section>

                <section>
                    <h2>Améliorez votre santé et votre condition physique avec MyFitLog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aspernatur consequatur esse
                        ipsam ipsum nemo neque nesciunt optio perferendis quae quasi quisquam, ratione reiciendis
                        repellendus sequi vel veritatis! Dicta error id libero molestiae saepe. Deleniti dolore earum
                        eius explicabo facilis, nesciunt nisi officiis quia quibusdam quisquam reprehenderit soluta,
                        temporibus.
                    </p>
                    <Button path={"/login"} name={"Se connecter"} />
                </section>
            </main>

            <footer>
                Made by Robin, Wivin, Nadia, Sofia
            </footer>
        </div>
    )
}