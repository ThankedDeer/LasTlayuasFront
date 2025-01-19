import { useEffect, useState } from "react";
import { instance } from "../../services/base.api";

export interface ITestimonial {
  testimonial_id: number;
  title: string;
  testimonial: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

const useTestimonial = () => {
  const [testimonialData, setTestimonialData] = useState<ITestimonial[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    GetTestimonios();
  }, []);

  const GetTestimonios = () => {
    setLoading(true);

    instance
      .get("users/Testimonials")
      .then((response) => {
        setTestimonialData(response.data);
      })
      .catch((error) => {
        setError(error.message || "An error occurred");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    GetTestimonios,
    loading,
    testimonialData,
    error,
  };
};

export default useTestimonial;
