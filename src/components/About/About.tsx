import { Image } from "@nextui-org/react";
import LabelSectionName from "../LabelSectionName/LabelSectionName";

const About = () => {
  return (
    <section className="justify-center w-full mb-5 sm:flex sm:flex-col sm:mb-0 sm:h-screen">
      <div className="grid h-auto grid-cols-1 text-justify place-items-center sm:grid-cols-2 sm:gap-8">
        <div>
          <LabelSectionName className="pt-4 sm:pt-8" text="Nosotros" />
          <h2 className="text-2xl font-bold font-RobotoSerif text-vibrantPink sm:text-3xl">
            Nuestra Historia
          </h2>
          <p className="my-2 sm:place-self-end sm:my-3 text-md font-Roboto">
            Hola, somos Eduardo y Amanda, originarios de San Francisco Ixhuatán,
            Oaxaca. Desde temprana edad, hemos estado inmersos en la rica
            tradición culinaria de nuestra región. Inspirados por las recetas
            ancestrales y el amor por la cocina de Amanda, mi madre, decidimos
            emprender esta aventura para compartir los sabores auténticos y la
            cultura de nuestra tierra con nuestra comunidad y más allá.
          </p>
        </div>
        <Image width={400} alt="NextUI hero Image" src="/img/history2.jpeg" />
        <p className="my-3 sm:my-0 text-md font-Roboto sm:place-self-start">
          Nuestro negocio no solo es un lugar para degustar platillos
          exquisitos, sino también un espacio donde se honra la tradición y la
          historia familiar. Cada receta cuenta una historia, cada ingrediente
          es seleccionado con cuidado, y cada platillo es preparado con amor y
          dedicación. Nos enorgullece poder compartir con ustedes un pedacito de
          nuestra herencia y esperamos que disfruten cada bocado tanto como
          nosotros disfrutamos prepararlo para ustedes. ¡Bienvenidos a nuestra
          mesa, donde la tradición y el sabor se encuentran!
        </p>
        <Image width={400} alt="NextUI hero Image" src="/img/rio.JPG" />
      </div>
    </section>
  );
};

export default About;
