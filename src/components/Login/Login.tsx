import { Button, Checkbox, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";
import useLogin from "../../hooks/useLogin/UseLogin";
import LoadingOverlay from "../Loader/Loader";


export default function Login() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const { formikLogin, loading } = useLogin()
    return (
        <>

            <Modal
                isOpen={true}
                placement="top-center"
                size="5xl"
                radius="none"
            >
                <ModalContent className="grid grid-cols-5">
                    {(onClose) => (
                        <>
                            {loading && <LoadingOverlay />}
                            <div className="px-3 py-6 col-span-2">
                                <ModalHeader className="flex flex-col gap-1">
                                    <h2 className="font-FugazOne text-xl  font-normal">Las Tlayudas</h2>
                                    <h3 className="font-Roboto font-bold">¡Bienvenido! Inicia sesión.</h3>
                                    <p className="font-Roboto font-normal text-sm text-Lowgary">Accede a tu cuenta para descubrir nuestros deliciosos platillos.</p>
                                </ModalHeader>
                                <ModalBody className="font-Roboto mt-3">
                                    <form className="grid gap-1" onSubmit={formikLogin.handleSubmit}>
                                        <Input
                                            autoFocus

                                            label="Correo"
                                            placeholder="Ingresa tu correo"
                                            variant="bordered"
                                            size="sm"
                                            name="email"
                                            value={formikLogin.values.email}
                                            onChange={formikLogin.handleChange}
                                            onBlur={formikLogin.handleBlur}
                                            isInvalid={formikLogin.touched.email && Boolean(formikLogin.errors.email)}
                                            errorMessage={formikLogin.errors.email}
                                        />
                                        <Input

                                            label="Contraseña"
                                            placeholder="Ingresa tu contraseña"
                                            variant="bordered"
                                            size="sm"
                                            endContent={
                                                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                                    {isVisible ? (
                                                        <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />
                                                    ) : (
                                                        <TbEyeFilled className="text-xl text-default-400 pointer-events-none" />
                                                    )}
                                                </button>
                                            }
                                            type={isVisible ? "text" : "password"}
                                            name="password"
                                            value={formikLogin.values.password}
                                            onChange={formikLogin.handleChange}
                                            onBlur={formikLogin.handleBlur}
                                            isInvalid={formikLogin.touched.password && Boolean(formikLogin.errors.password)}
                                            errorMessage={formikLogin.errors.password}
                                        />



                                        <div className="flex py-2 px-1 justify-between ">
                                            <Checkbox
                                                classNames={{
                                                    label: "text-sm text-Lowgary font-bold ",


                                                }}
                                                color="primary"
                                                radius="full"
                                            >
                                                Recordarme
                                            </Checkbox>
                                            <Link className="text-sm font-bold text-Lowgary underline" color="primary" href="#" size="sm">
                                                Recuperar contraseña
                                            </Link>
                                        </div>
                                        <div className="flex space-x-2 mt-4">
                                            <Button
                                                color="primary"
                                                radius="sm"
                                                type="submit"
                                                disabled={formikLogin.isSubmitting}
                                            >
                                                {formikLogin.isSubmitting ? "Enviando..." : "Iniciar sesión"}
                                            </Button>
                                            <Button color="default" radius="sm" variant="flat" onPress={onClose}>
                                                Cerrar
                                            </Button>
                                        </div>
                                    </form>

                                </ModalBody>
                                <ModalFooter className="flex flex-col items-start">

                                    <h3 className="block w-full  mt-4 text-sm font-bold text-Lowgary">
                                        ¿No tienes cuenta?
                                        <Link className="ml-2" href="/register" size="sm">
                                            Regístrate
                                        </Link>
                                    </h3>
                                </ModalFooter>

                            </div>
                            <div className="col-span-3"><img src="/public/img/Las Tlayudas.png" alt="Las tlayudas" className="h-full w-full" /></div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
