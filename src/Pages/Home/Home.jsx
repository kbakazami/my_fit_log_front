import Navbar from "../../Components/Navbar/Navbar.jsx";
import Button from "../../Components/Button/Button.jsx";

export default function Home(){
    return (
        <div>
            <main>
                <section>
                    <h2>Concept</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus ex fugit ipsam libero magni
                        numquam ratione rem similique voluptatum. Ab accusamus cupiditate dignissimos, dolorum ea est
                        explicabo fuga incidunt inventore magnam maiores perferendis quae quam quo ratione reprehenderit
                        rerum sapiente sint tempore, vero. Laboriosam nobis non omnis porro. Provident?</p>
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