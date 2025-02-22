import { Image } from "@nextui-org/react";
import LabelSectionName from "../LabelSectionName/LabelSectionName";

const About = () => {
  return (
    <section className="w-screen h-screen px-4 sm:px-16 sm:mb-0 sm:h-screen">
      {/* Imagen posicionada de forma absoluta en la esquina superior derecha */}

      <div className="relative z-10 grid h-auto grid-cols-1 text-justify place-items-center sm:grid-cols-2 sm:gap-8">
        <div className="self-start justify-self-end">
          <LabelSectionName className="pt-4 sm:pt-8" text="Nosotros" />
          <h2 className="text-2xl font-bold font-RobotoSerif text-vibrantPink sm:text-3xl">
            Nuestra Historia
          </h2>
          <p className="my-2 sm:my-3 text-md font-Roboto">
            Hola, somos Eduardo y Amanda, originarios de San Francisco Ixhuatán,
            Oaxaca. Desde temprana edad, hemos estado inmersos en la rica
            tradición culinaria de nuestra región...
          </p>
        </div>

        <Image
          radius="none"
          width={400}
          alt="NextUI hero Image"
          src="/img/history2.jpeg"
        />
        <p className="my-3 sm:my-0 text-md font-Roboto sm:place-self-start">
          Nuestro negocio no solo es un lugar para degustar platillos
          exquisitos, sino también un espacio donde se honra la tradición...
        </p>
        <Image
          radius="none"
          width={400}
          alt="NextUI hero Image"
          src="/img/rio.JPG"
        />
      </div>
    </section>
  );
};

export default About;
