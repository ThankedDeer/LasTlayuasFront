import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@nextui-org/react";
import useTestimonial from "../../hooks/useTestimonial/useTestimonial";
import LoadingOverlay from "../Loader/Loader";

type IFormModal = {
    isOpen: boolean;
    onOpenChange: () => void;
    onOpen: () => void;
    GetTestimonios: () => void
};

export default function FormModal({ isOpen, onOpenChange, GetTestimonios }: IFormModal) {

    const { formikTestimonial, loading } = useTestimonial(onOpenChange, GetTestimonios);

    return (
        <Modal
            backdrop="blur"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {loading && <LoadingOverlay />}
                <form onSubmit={formikTestimonial.handleSubmit}>
                    <ModalHeader className="flex flex-col gap-1">Enviar Testimonio</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col gap-4">
                            <Input
                                autoFocus
                                label="Titulo"
                                placeholder="Ingresa un titulo"
                                variant="bordered"
                                size="sm"
                                name="title"
                                type="text"
                                value={formikTestimonial.values.title}
                                onChange={formikTestimonial.handleChange}
                                onBlur={formikTestimonial.handleBlur}
                                isInvalid={formikTestimonial.touched.title && Boolean(formikTestimonial.errors.title)}
                                errorMessage={formikTestimonial.errors.title}
                            />
                            <Textarea
                                label="Descripción"
                                variant="bordered"
                                placeholder="Ingresa una descripción"
                                disableAnimation
                                disableAutosize
                                classNames={{
                                    input: "resize-y min-h-[40px]",
                                }}
                                name="testimonial"
                                value={formikTestimonial.values.testimonial}
                                onChange={formikTestimonial.handleChange}
                                onBlur={formikTestimonial.handleBlur}
                                isInvalid={formikTestimonial.touched.testimonial && Boolean(formikTestimonial.errors.testimonial)}
                                errorMessage={formikTestimonial.errors.testimonial}
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onOpenChange}>
                            Cancelar
                        </Button>
                        <Button color="primary" type="submit" >
                            Enviar
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}
