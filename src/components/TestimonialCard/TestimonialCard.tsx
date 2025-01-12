import { ITestimonial } from "../../hooks/useTestimonis/useGetTestimonial";
import Quotation from "../Quotation/Quotation";

interface ITestimonialCardProps {
  testimonial: ITestimonial;
  color: string;
}

const TestimonialCard = ({ testimonial, color }: ITestimonialCardProps) => {
  return (
    <div className="relative border-solid border-large h-96 w-80 max-w-full max-h-full shadow-lg ">
      <div className="absolute right-6 -top-2">
        <Quotation color={color} />
      </div>
      <p className="font-Roboto text-Lowgary text-center h-3/5 px-8 py-14 text-sm">
        {testimonial.testimonial}
      </p>
      <div
        className="relative flex flex-col items-center h-2/5"
        style={{ backgroundColor: color }}
      >
        <div
          className="absolute top-0 transform -translate-y-1/2 p-1 rounded-full"
          style={{ backgroundColor: color }}
        >
          <img
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${testimonial.title}`}
            alt={testimonial.testimonial}
            className="h-24 w-24 block rounded-full object-cover object-center"
          />
        </div>
        <h3 className="font-semibold text-lg text-white mt-14">
          {testimonial.title}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
