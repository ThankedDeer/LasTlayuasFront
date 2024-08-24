import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../services/base.api";

export interface ITestimonial {
    title: string;
    testimonial: string;
}

const initialValues: ITestimonial = {
    title: "",
    testimonial: "",
};

const useTestimonial = (onOpenChange: () => void, GetTestimonios: () => void) => {
    const [testimonialData, setTestimonialData] = useState<ITestimonial | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const validate = (values: ITestimonial) => {
        const errors: Partial<ITestimonial> = {};
        if (!values.title) {
            errors.title = "Título es requerido";
        }
        if (!values.testimonial) {
            errors.testimonial = "Descripción es requerida";
        }
        return errors;
    };

    const formikTestimonial = useFormik({
        initialValues,
        validate,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            createTestimonial(values, setSubmitting, resetForm);
            GetTestimonios()
        },
    });

    const createTestimonial = (
        testimonialData: ITestimonial,
        setSubmitting: (isSubmitting: boolean) => void,
        resetForm: () => void
    ) => {
        setLoading(true);

        instance.post("users/Testimonials", testimonialData)
            .then((response) => {
                setTestimonialData(response.data);
                resetForm();
                navigate("/");
                onOpenChange()
            })
            .catch((error) => {
                setError(error.message || "An error occurred");
                resetForm();
                navigate("/");

                onOpenChange()
            })
            .finally(() => {
                setLoading(false);
                setSubmitting(false);
            });
    };

    return {
        formikTestimonial,
        loading,
        testimonialData,
        error,
    };
};

export default useTestimonial;
