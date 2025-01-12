import { useFormik } from "formik";
import { useState } from "react";
import { instance } from "../../services/base.api";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

export interface INewUser {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

const initialValues: INewUser = {
  firstname: "",
  lastname: "",
  password: "",
  email: "",
};

const useCreateUser = () => {
  const [newUserData, setNewUserData] = useState<INewUser | null>(null);
  const [loadingNewUser, setLoadingNewUser] = useState<boolean>(false);
  const [errorNewUser, setErrorNewUser] = useState<string>("");

  const navigate = useNavigate(); // Inicializar useNavigate

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
    if (!/[A-Z]/.test(password)) {
      return "La contraseña debe tener al menos una mayúscula";
    }
    if (!/[a-z]/.test(password)) {
      return "La contraseña debe tener al menos una minúscula";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "La contraseña debe tener al menos un carácter especial";
    }
    if (/\d{2,}/.test(password)) {
      return "La contraseña no debe contener números consecutivos";
    }
    if (/(.)\1{1,}/.test(password)) {
      return "La contraseña no debe contener letras consecutivas";
    }
    return null; // No hay errores
  };

  const FormikRegister = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const errors: Partial<INewUser> = {};
      if (!values.firstname) {
        errors.firstname = "Nombre es requerido";
      }
      if (!values.lastname) {
        errors.lastname = "Apellido es requerido";
      }
      if (!values.email) {
        errors.email = "Correo es requerido";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Correo inválido";
      }

      const passwordError = validatePassword(values.password);
      if (passwordError) {
        errors.password = passwordError;
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      CreateUser(values, setSubmitting, resetForm);
    },
  });

  const CreateUser = (
    userData: INewUser,
    setSubmitting: (isSubmitting: boolean) => void,
    resetForm: () => void,
  ) => {
    setLoadingNewUser(true);

    instance
      .post("users/", userData)
      .then((response) => {
        setNewUserData(response.data);
        resetForm(); // Limpiar el formulario
        navigate("/login"); // Redirigir a la página de éxito o a donde desees
      })
      .catch((error) => {
        setErrorNewUser(error.message || "An error occurred");
      })
      .finally(() => {
        setLoadingNewUser(false);
        setSubmitting(false);
      });
  };

  return {
    FormikRegister,
    loadingNewUser,
    newUserData,
    errorNewUser,
  };
};

export default useCreateUser;
