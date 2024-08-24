import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input, Select, SelectItem } from "@nextui-org/react";
import { AppUser } from "../UserList/UserList";
import { useState, useEffect } from "react";

type IEditUserModal = {
    isOpen: boolean;
    onOpenChange: () => void;
    onOpen: () => void;
    user: AppUser | null;
};

export default function EditUserModal({ isOpen, onOpenChange, user }: IEditUserModal) {
    const [userData, setUserData] = useState<AppUser | null>(null);

    useEffect(() => {
        setUserData(user);
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof AppUser) => {
        if (userData) {
            setUserData({ ...userData, [field]: e.target.value });
        }
    };

    const handleSelectChange = (value: string) => {
        if (userData) {
            setUserData({ ...userData, role_name: value });
        }
    };

    const handleSave = () => {
        // Implement the save functionality here
        console.log("User data to save:", userData);
        onOpenChange(); // Close the modal
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Edit User</ModalHeader>
                        <ModalBody>
                            {userData && (
                                <div className="flex flex-col gap-4">
                                    <Input
                                        fullWidth
                                        label="First Name"
                                        value={userData.firstname}
                                        onChange={(e) => handleInputChange(e, 'firstname')}
                                    />
                                    <Input
                                        fullWidth
                                        label="Last Name"
                                        value={userData.lastname}
                                        onChange={(e) => handleInputChange(e, 'lastname')}
                                    />
                                    <Input
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        value={userData.email}
                                        onChange={(e) => handleInputChange(e, 'email')}
                                    />
                                    <Select
                                        label="Role"
                                        placeholder="Select a role"
                                        value={userData.role_name}
                                        onChange={() => handleSelectChange}
                                        className="max-w-xs"
                                    >
                                        <SelectItem value="Admin" key={"Adminff"}>Admin</SelectItem>
                                        <SelectItem value="User" key={"sfvrb"}>User</SelectItem>
                                    </Select>

                                </div>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleSave}>
                                Save
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
