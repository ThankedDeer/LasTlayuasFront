// import { Button, useDisclosure } from "@nextui-org/react";

// import FormModal from "../FormModal/FormModal";
// import LabelSectionName from "../LabelSectionName/LabelSectionName";
// import useTestimonial from "../../hooks/useTestimonis/useGetTestimonial";

// const Testimonial = () => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const { testimonialData, GetTestimonios } = useTestimonial();

//   return (
//     <section className="grid items-center h-screen max-w-full grid-cols-2 ">
//       <div className="">
//         <LabelSectionName text="Testimonios" />
//         <h2 className="font-bold font-RobotoSerif text-7xl text-brightOrange">
//           Lo Que Dicen Nuestros Clientes
//         </h2>
//         <Button
//           className="mt-4 font-semibold text-white bg-black"
//           radius="none"
//           variant="solid"
//           size="lg"
//           onPress={onOpen}
//         >
//           Agrega reseña
//         </Button>
//         <FormModal
//           GetTestimonios={GetTestimonios}
//           isOpen={isOpen}
//           onOpenChange={onOpenChange}
//           onOpen={onOpen}
//         />
//       </div>
//       <div className="grid content-center h-full max-w-full max-h-full ">
//         {/* <Carousel testimonialData={testimonialData} /> */}
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
