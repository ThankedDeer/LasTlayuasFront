import { useFormik } from "formik";
import { useState } from "react";
import { instance } from "../../services/base.api";
import { useNavigate } from "react-router-dom";

export interface ILogin {
    email: string;
    password: string;
}

const initialValues: ILogin = {
    email: "",
    password: "",
};

const validate = (values: ILogin) => {
    const errors: Partial<ILogin> = {};

    if (!values.email) {
        errors.email = "Correo es requerido";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = "Correo inválido";
    }
    if (!values.password) {
        errors.password = "Contraseña es requerida";
    }

    return errors;
};

const useLogin = (setLoginContext: (state: boolean) => void) => {
    const [login, setLogin] = useState<ILogin | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const formikLogin = useFormik({
        initialValues,
        validate,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            handleLogin(values, setSubmitting, resetForm)

        },
    });

    const handleLogin = async (userData: ILogin, setSubmitting: (isSubmitting: boolean) => void,
        resetForm: () => void) => {
        setLoading(true);

        instance.post("users/", userData)
            .then((response) => {
                setLogin(response.data);
                resetForm();
                navigate("/");
                setLoginContext(true)
            })
            .catch((error) => {
                setError(error.message || "An error occurred"); 7
                navigate("/");
                setLoginContext(true)

            })
            .finally(() => {
                setLoading(false);
                setSubmitting(false);
            });
    };

    return {
        formikLogin,
        loading,
        login,
        error,
    };
};

export default useLogin;
