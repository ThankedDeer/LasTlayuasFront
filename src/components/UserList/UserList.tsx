import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User as NextUser } from "@nextui-org/react";
import React, { Key, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAllUsers from "../../hooks/useUserList";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import EditUserModal from "../EditUserModal/EditUserModal";

const columns = [
    { name: "Name", uid: "name" },
    { name: "Role", uid: "role" },
    { name: "Status", uid: "status" },
    { name: "Actions", uid: "actions" }
];

export interface AppUser {
    user_id: number;
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    role_id: number;
    role_name: string;
    role_description: RoleDescription;
}

export interface RoleDescription {
    String: string;
    Valid: boolean;
}

export default function UserList() {
    const { allUsers } = useAllUsers();
    const [selectedUser, setSelectedUser] = useState<AppUser | null>(null);
    const [modalType, setModalType] = useState<'view' | 'edit' | null>(null);
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const openModal = (user: AppUser, type: 'view' | 'edit') => {
        setSelectedUser(user);
        setModalType(type);
        onOpen();
    };

    const renderCell = React.useCallback((user: AppUser, columnKey: Key) => {

        switch (columnKey) {
            case "name":
                return (
                    <NextUser
                        avatarProps={{ radius: "lg", src: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.firstname}` }}
                        description={user.email}
                        name={`${user.firstname} ${user.lastname}`}
                    >
                        {user.email}
                    </NextUser>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{user.role_name}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={"success"} size="sm" variant="flat">
                        {"Active"}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-end gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => openModal(user, 'view')}>
                                <FaEye />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => openModal(user, 'edit')}>
                                <FaEdit />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <MdDelete />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return <span>{"hola"}</span>;
        }
    }, []);

    return (
        <>
            {allUsers && allUsers.length > 0 ? (
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={allUsers}>
                        {(item) => (
                            <TableRow key={item.user_id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            ) : (
                <p>No users found</p>
            )}

            {/* Modal for Viewing User Details */}
            <Modal isOpen={isOpen && modalType === 'view'} onOpenChange={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">User Details</ModalHeader>
                            <ModalBody>
                                {selectedUser && (
                                    <div>
                                        <p><strong>Name:</strong> {selectedUser.firstname} {selectedUser.lastname}</p>
                                        <p><strong>Email:</strong> {selectedUser.email}</p>
                                        <p><strong>Role:</strong> {selectedUser.role_name}</p>
                                        <p><strong>Description:</strong> {selectedUser.role_description.String}</p>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Modal for Editing User */}
            <EditUserModal user={selectedUser} isOpen={isOpen && modalType === 'edit'} onOpen={onOpen} onOpenChange={onOpenChange} />
        </>
    );
}
