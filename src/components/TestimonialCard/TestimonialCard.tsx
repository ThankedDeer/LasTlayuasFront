import { ITestimonial } from "../../hooks/useTestimonis/useGetTestimonial";
import Quotation from "../Quotation/Quotation";

interface ITestimonialCardProps {
  testimonial: ITestimonial;
  color: string;
}

const TestimonialCard = ({ testimonial, color }: ITestimonialCardProps) => {
  return (
    <div className="relative max-w-full max-h-full border-solid shadow-lg border-large h-96 w-80 ">
      <div className="absolute right-6 -top-2">
        <Quotation color={color} />
      </div>
      <p className="px-8 text-sm text-center font-Roboto text-Lowgary h-3/5 py-14">
        {testimonial.testimonial}
      </p>
      <div
        className="relative flex flex-col items-center h-2/5"
        style={{ backgroundColor: color }}
      >
        <div
          className="absolute top-0 p-1 transform -translate-y-1/2 rounded-full"
          style={{ backgroundColor: color }}
        >
          <img
            src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${testimonial.title}`}
            alt={testimonial.testimonial}
            className="block object-cover object-center w-24 h-24 rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-white mt-14">
          {testimonial.title}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
