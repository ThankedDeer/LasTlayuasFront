import { Image } from "@nextui-org/react";
import LabelSectionName from "../LabelSectionName/LabelSectionName";

const About = () => {
    return (
        <section className="h-screen grid grid-cols-2">
            <div className="place-content-center">
                <LabelSectionName text="Nosotros" />
                <h2 className="font-RobotoSerif font-bold text-3xl text-vibrantPink">Nuestra Historia</h2>
                <p className="font-Roboto text-lg">Hola, somos Eduardo Salinas García y Amanda García Cruz, originarios de San Francisco Ixhuatán, Oaxaca. Desde temprana edad, hemos estado inmersos en la rica tradición culinaria de nuestra región. Inspirados por las recetas ancestrales y el amor por la cocina de Amanda, mi madre, decidimos emprender esta aventura para compartir los sabores auténticos y la cultura de nuestra tierra con nuestra comunidad y más allá.

                    <br />
                    <br />
                    Nuestro negocio no solo es un lugar para degustar platillos exquisitos, sino también un espacio donde se honra la tradición y la historia familiar. Cada receta cuenta una historia, cada ingrediente es seleccionado con cuidado, y cada platillo es preparado con amor y dedicación. Nos enorgullece poder compartir con ustedes un pedacito de nuestra herencia y esperamos que disfruten cada bocado tanto como nosotros disfrutamos prepararlo para ustedes. ¡Bienvenidos a nuestra mesa, donde la tradición y el sabor se encuentran!
                </p>
            </div>
            <div className="grid place-items-center">
                <Image
                    width={400}
                    alt="NextUI hero Image"
                    src="/img/history2.jpeg"
                />
                <Image
                    width={400}
                    alt="NextUI hero Image"
                    src="/img/rio.JPG"
                />
            </div>

        </section>
    )
}

export default About