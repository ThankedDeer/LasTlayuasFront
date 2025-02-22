import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen text-white bg-fixed bg-center bg-cover header bg-blend-overlay bg-black/65 div">
      <div className="flex items-center flex-1 sm:items-center h-1/2">
        <div className="mx-auto text-center">
          <h2 className="text-7xl font-Ruthie sm:text-9xl text-cornYellow lg:text-9xl">
            Autenticidad
          </h2>
          <h1 className="-mt-3 text-4xl font-semibold font-primary sm:text-7xl">
            LAS TLAYUDAS
          </h1>
          <Button className="mt-8 bg-primary lg:mt-10" radius="sm" size="lg">
            <Link
              className="text-2xl font-semibold text-white font-primary lg:text-xl"
              to=""
            >
              Reserva Ahora
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
