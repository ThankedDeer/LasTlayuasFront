import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-start flex-1 mt-40 sm:mt-0 sm:items-center h-1/2">
      <div className="mx-auto text-center">
        <h2 className="text-6xl font-Ruthie sm:text-9xl text-cornYellow lg:text-9xl">
          Autenticidad
        </h2>
        <h1 className="-mt-3 text-4xl font-semibold font-primary sm:text-7xl">
          LAS TLAYUDAS
        </h1>
        <Button className="mt-8 bg-primary lg:mt-10" radius="sm" size="lg">
          <Link
            className="text-xl font-semibold text-white font-primary lg:text-xl"
            to=""
          >
            Reserva Ahora
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
