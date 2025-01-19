import { Button, useDisclosure } from "@nextui-org/react";
import Carousel from "../Carousel/Carousel";
import LabelSectionName from "../LabelSectionName/LabelSectionName";
import FormModal from "../FormModal/FormModal";
import useTestimonial from "../../hooks/useTestimonis/useGetTestimonial";

const Testimonial = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { testimonialData, GetTestimonios } = useTestimonial();

  return (
    <section className="grid grid-cols-2 max-w-full h-screen items-center ">
      <div className="">
        <LabelSectionName text="Testimonios" />
        <h2 className="font-RobotoSerif text-7xl font-bold text-brightOrange">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <Button
          className="bg-black text-white font-semibold mt-4"
          radius="none"
          variant="solid"
          size="lg"
          onPress={onOpen}
        >
          Agrega reseña
        </Button>
        <FormModal
          GetTestimonios={GetTestimonios}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onOpen={onOpen}
        />
      </div>
      <div className="grid content-center max-w-full  max-h-full h-full ">
        <Carousel testimonialData={testimonialData} />
      </div>
    </section>
  );
};

export default Testimonial;
