import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="flex-1 flex items-center">

            <div className="text-center mx-auto">
                <h2>Autenticidad</h2>
                <h1 className="text-5xl font-semibold">LAS TLAYUDAS</h1>
                <Button radius="sm">
                    <Link to={""}>Reserva</Link>
                </Button>
            </div>

        </div>
    )
}

export default Hero