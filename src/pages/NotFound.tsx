import { useRouteError } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

interface RouteError {
  statusText?: string;
  message?: string;
}

const NotFound = () => {
  const error = useRouteError() as RouteError;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white p-4">
      <FaExclamationTriangle className="text-vibrantPink text-6xl mb-4" />
      <h1 className="text-5xl font-bold text-vibrantPink">¡Error 404!</h1>
      <p className="text-black mt-2 text-xl">
        ¡Oh no! Parece que te has perdido en la búsqueda del sabor auténtico.
      </p>
      <p className="text-brightOrange italic mt-1 text-lg">
        {error.statusText || error.message}
      </p>
      <p className="text-black mt-2 text-xl">
        Regresa al menú y sigue explorando nuestros deliciosos platillos
        oaxaqueños.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-full hover:bg-vibrantPink transition duration-300"
      >
        Regresar
      </button>
    </div>
  );
};

export default NotFound;
