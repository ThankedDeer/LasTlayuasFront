import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";
import useCreateUser from "../../hooks/useRegister/useRegister";
import LoadingOverlay from "../Loader/Loader";

export default function Register() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { FormikRegister, loadingNewUser } = useCreateUser();

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Modal isOpen={true} placement="top-center" size="5xl" radius="none">
        <ModalContent className="grid grid-cols-5">
          {(onClose) => (
            <>
              {loadingNewUser && <LoadingOverlay />}
              <div className="col-span-2 px-3 py-6">
                <ModalHeader className="flex flex-col gap-1">
                  <h2 className="text-xl font-normal font-FugazOne">
                    Las Tlayudas
                  </h2>
                  <h3 className="font-bold font-Roboto">
                    ¡Bienvenido! Regístrate ahora.
                  </h3>
                  <p className="text-sm font-normal font-Roboto text-Lowgary">
                    Crea tu cuenta para descubrir nuestros deliciosos platillos.
                  </p>
                </ModalHeader>
                <ModalBody className="mt-3 font-Roboto">
                  <form
                    className="grid gap-1"
                    onSubmit={FormikRegister.handleSubmit}
                  >
                    <Input
                      autoFocus
                      label="Nombre"
                      placeholder="Ingresa tu nombre"
                      variant="bordered"
                      size="sm"
                      name="firstname"
                      value={FormikRegister.values.firstname}
                      onChange={FormikRegister.handleChange}
                      onBlur={FormikRegister.handleBlur}
                      isInvalid={
                        FormikRegister.touched.firstname &&
                        Boolean(FormikRegister.errors.firstname)
                      }
                      errorMessage={FormikRegister.errors.firstname}
                    />
                    <Input
                      label="Apellido"
                      placeholder="Ingresa tu apellido"
                      variant="bordered"
                      size="sm"
                      name="lastname"
                      value={FormikRegister.values.lastname}
                      onChange={FormikRegister.handleChange}
                      onBlur={FormikRegister.handleBlur}
                      isInvalid={
                        FormikRegister.touched.lastname &&
                        Boolean(FormikRegister.errors.lastname)
                      }
                      errorMessage={FormikRegister.errors.lastname}
                    />
                    <Input
                      label="Correo"
                      placeholder="Ingresa tu correo"
                      variant="bordered"
                      size="sm"
                      name="email"
                      value={FormikRegister.values.email}
                      onChange={FormikRegister.handleChange}
                      onBlur={FormikRegister.handleBlur}
                      isInvalid={
                        FormikRegister.touched.email &&
                        Boolean(FormikRegister.errors.email)
                      }
                      errorMessage={FormikRegister.errors.email}
                    />

                    <Input
                      label="Crea Contraseña"
                      placeholder="Crea tu contraseña"
                      variant="bordered"
                      size="sm"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                          aria-label="toggle password visibility"
                        >
                          {isVisible ? (
                            <FaEyeSlash className="text-xl pointer-events-none text-default-400" />
                          ) : (
                            <TbEyeFilled className="text-xl pointer-events-none text-default-400" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                      name="password"
                      value={FormikRegister.values.password}
                      onChange={FormikRegister.handleChange}
                      onBlur={FormikRegister.handleBlur}
                      isInvalid={
                        FormikRegister.touched.password &&
                        Boolean(FormikRegister.errors.password)
                      }
                      errorMessage={FormikRegister.errors.password}
                    />
                    <div className="flex mt-4 space-x-2">
                      <Button
                        color="primary"
                        radius="sm"
                        type="submit"
                        disabled={FormikRegister.isSubmitting}
                      >
                        {FormikRegister.isSubmitting
                          ? "Enviando..."
                          : "Registrarme"}
                      </Button>
                      <Button
                        color="default"
                        radius="sm"
                        variant="flat"
                        onPress={onClose}
                      >
                        Cerrar
                      </Button>
                    </div>
                  </form>
                </ModalBody>
                <ModalFooter className="flex flex-col items-start">
                  <h3 className="block w-full text-sm font-bold text-Lowgary">
                    ¿Ya tienes cuenta?
                    <Link className="ml-2" href="/login" size="sm">
                      Inicia sesión.
                    </Link>
                  </h3>
                </ModalFooter>
              </div>
              <div className="col-span-3">
                <img
                  src="/img/Las Tlayudas.png"
                  alt="Las tlayudas"
                  className="w-full h-full"
                />
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
