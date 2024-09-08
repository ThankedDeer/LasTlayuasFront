import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="flex-1 flex items-center">

            <div className="text-center mx-auto">
                <h2 className="text-9xl font-Ruthie text-cornYellow">Autenticidad</h2>
                <h1 className="text-7xl  -mt-3 font-RobotoSerif font-semibold">LAS TLAYUDAS</h1>
                <Button className="mt-10 bg-primary" radius="sm" size="lg" >
                    <Link className="font-RobotoSerif text-xl text-white" to={""}>Reserva Ahora</Link>
                </Button>
            </div>

        </div>
    )
}

export default Hero