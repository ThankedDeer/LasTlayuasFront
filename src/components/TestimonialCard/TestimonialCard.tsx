import Quotation from "../Quotation/Quotation";

export interface ITestimonial {
    img: string;
    name: string;
    opinion: string;
}

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
                {testimonial.opinion}
            </p>
            <div className="relative flex flex-col items-center h-2/5" style={{ backgroundColor: color }}>
                <div className="absolute top-0 transform -translate-y-1/2 p-1 rounded-full" style={{ backgroundColor: color }}>
                    <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="h-24 w-24 block rounded-full object-cover object-center"
                    />
                </div>
                <h3 className="font-semibold text-lg text-white mt-14">{testimonial.name}</h3>
            </div>
        </div>



    )
}

export default TestimonialCard;
