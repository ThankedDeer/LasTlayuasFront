import Carousel from "../Carousel/Carousel"
import LabelSectionName from "../LabelSectionName/LabelSectionName"

const Testimonial = () => {
    return (
        <section className="grid grid-cols-2 max-w-full h-screen items-center ">
            <div className="">
                <LabelSectionName text="Testimonios" />
                <h2 className="font-RobotoSerif text-7xl font-bold text-brightOrange">Lo Que Dicen Nuestros Clientes</h2>

            </div>
            <div className="grid content-center max-w-full  max-h-full h-full ">
                <Carousel />
            </div>
        </section>
    )
}

export default Testimonial