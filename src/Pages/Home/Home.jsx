import SectionConcept from "../../Components/SectionConcept/SectionConcept.jsx";
import SectionAbout from "../../Components/SectionAbout/SectionAbout";
import {Link} from "react-router-dom";
import "./Home.scss";
import imgGraphique from "./images/graphique.svg";
import imgSleep from "./images/sleeping.svg";
import imgHealthy from "./images/healthy-food.svg";
import imgSport from "./images/sports.svg";
import imgCoding from "./images/coding.svg";
import imgExpertise from "./images/expertise.svg";
import imgHeartHealth from "./images/health-heart.svg";
import myFitLogo from "./images/logo.png";

export default function Home(){
    return (
        <div>
            <header className={"cover-banner flex flex-col justify-between py-8 px-5 lg:px-10"}>
                <div className={"flex justify-between items-center"}>
                    <Link className={"text-white h-12 w-12"} to={"/"}>
                        <img src={myFitLogo} alt={"My Fit Log"} className={"w-full h-full bg-contain bg-no-repeat"}/>
                    </Link>
                    <div className={"flex gap-x-3 items-center"}>
                        <Link className={"text-white hover:underline underline-offset-8"} to={"/register"}>
                            Inscription
                        </Link>
                        <Link className={"btn btn-inverted"} to={"/login"}>
                            Connexion
                        </Link>
                    </div>
                </div>
                <h1 className={"uppercase text-white text-xl lg:text-3xl font-bold"}>Suivez votre santé avec MyFitLog</h1>
                <p className={"text-sm lg:text-base text-white text-center max-w-screen-xl mx-auto"}>Améliorez votre santé en surveillant votre activité physique, votre alimentation et votre sommeil grâce à notre application de surveillance de la santé. Visualisez vos progrès en temps réel avec nos graphiques et tableaux pour rester motivé et atteindre vos objectifs de santé et de condition physique.</p>
            </header>
            <main className={"container px-4 mx-auto max-w-screen-xl"}>
                <section className={"mt-10"}>
                    <h2 className={"uppercase text-primary text-2xl lg:text-3xl text-center font-bold"}>Concept</h2>
                    <p className={"text-center mt-3"}>
                        Bienvenue sur <span className={"text-tertiary font-bold"}>MyFitLog</span>, l'application de surveillance de la santé qui vous accompagne dans votre parcours de bien-être et de condition physique. Nous avons créé cette application pour aider les utilisateurs à suivre leur santé et leur progression de manière simple et pratique
                        Voici quelques points de concept clés de notre application
                    </p>
                    <div className={"grid lg:grid-cols-2 gap-8 mt-5"}>
                        <SectionConcept title={"Suivi de l'"} titleKey={"activité physique"} img={imgSport} alt={"Activité physique"} >
                            MyFitLog permet aux utilisateurs de suivre leur activité physique en enregistrant le nombre de pas, la distance parcourue, les calories brûlées et bien plus encore. Les graphiques et tableaux de l'application vous aideront à visualiser vos progrès et à atteindre vos objectifs de condition physique.
                        </SectionConcept>

                        <SectionConcept title={"Suivi de l'"} titleKey={"alimentation"} img={imgHealthy} alt={"Nourriture saine"} >
                            L'application vous permet de suivre votre consommation de nourriture, de surveiller les calories, les nutriments et l'apport en eau. Vous pouvez également ajouter des photos de vos repas pour mieux suivre votre alimentation.
                        </SectionConcept>

                        <SectionConcept title={"Suivi du "} titleKey={"sommeil"} img={imgSleep} alt={"Sommeil"} >
                            MyFitLog vous aide à suivre votre sommeil, en enregistrant le temps de sommeil, la qualité du sommeil et les cycles de sommeil. Vous pourrez ainsi mieux comprendre votre sommeil et trouver des moyens pour améliorer votre qualité de sommeil.
                        </SectionConcept>

                        <SectionConcept title={"Visualisation des "} titleKey={"données"} img={imgGraphique} alt={"Graphique"} >
                            L'application comprend des graphiques et tableaux pour vous aider à visualiser vos progrès. Vous pouvez personnaliser les tableaux en fonction de vos préférences pour mieux suivre vos mesures. Avec MyFitLog, vous pouvez suivre votre santé et votre condition physique en un seul endroit.
                        </SectionConcept>

                    </div>
                </section>

                <section className={"mt-10 lg:mt-17"}>
                    <h2 className={"uppercase text-primary text-2xl lg:text-3xl text-center font-bold mb-2.5"}>
                        A propos
                    </h2>
                    <div className={"flex flex-col justify-center gap-x-4"}>
                        <SectionAbout img={imgExpertise} alt={"Professionnels"} >
                            Chez MyFitLog, notre équipe est composée de professionnels passionnés par la santé et la condition physique.
                            Nous sommes une équipe multidisciplinaire, avec des développeurs, des designers, des experts en nutrition et en activité physique,
                            des spécialistes du sommeil et bien plus encore. Nous sommes tous unis par la vision de créer une application de surveillance de
                            la santé qui soit à la fois simple et efficace.
                        </SectionAbout>

                        <SectionAbout img={imgCoding} alt={"Développer"} >
                            Notre équipe de développement est composée de programmeurs expérimentés, qui travaillent en étroite collaboration
                            avec les experts en santé et en condition physique pour créer une application intuitive et facile à utiliser.
                            Notre équipe de design s'assure que l'application est à la fois esthétique et conviviale, avec une interface
                            utilisateur simple et élégante.
                        </SectionAbout>

                        <SectionAbout img={imgHealthy} alt={"Alimentation saine"} >
                            Notre équipe de nutrition et d'activité physique comprend des diététiciens et des entraîneurs personnels qualifiés,
                            qui aident à créer des plans de régime et d'entraînement personnalisés pour les utilisateurs. Notre équipe de sommeil
                            aide à développer des fonctionnalités de suivi du sommeil pour aider les utilisateurs à mieux comprendre leur sommeil
                            et à l'améliorer.
                        </SectionAbout>

                        <SectionAbout img={imgHeartHealth} alt={"Vie saine"} >
                            Chez MyFitLog, nous sommes tous passionnés par la santé et la condition physique, et nous sommes déterminés à aider
                            les utilisateurs à atteindre leurs objectifs de bien-être. Nous sommes fiers de travailler ensemble pour offrir une
                            expérience utilisateur exceptionnelle à nos utilisateurs.
                        </SectionAbout>


                    </div>
                </section>

                <section className={"mt-10 lg:mt-20 flex flex-col items-center"}>
                    <h2 className={"uppercase text-primary text-2xl lg:text-3xl text-center font-bold mb-5"}>
                        Améliorez votre santé et votre condition physique avec MyFitLog
                    </h2>
                    <p className={"text-center"}>
                        MyFitLog est l'application de surveillance de la santé idéale pour suivre votre activité physique,
                        votre alimentation et votre sommeil. Avec nos graphiques et tableaux personnalisables, vous pouvez
                        suivre vos progrès en temps réel et atteindre vos objectifs de bien-être. Nos professionnels qualifiés
                        vous aident à personnaliser des plans de régime et d'entraînement pour vous aider à atteindre vos objectifs
                        plus rapidement. L'inscription à MyFitLog est simple et gratuite, alors inscrivez-vous dès aujourd'hui et
                        commencez à améliorer votre santé et votre condition physique.
                    </p>
                        <Link className={"btn btn-primary mt-5"} to={"/register"}>
                            S'inscrire
                        </Link>
                </section>
            </main>

            <footer className={"bg-primary w-full text-secondary uppercase text-base lg:text-2xl mt-28 text-center py-2"}>
                Made by Robin, Wivin, Nadia, Sofia
            </footer>
        </div>
    )
}