import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User as NextUser } from "@nextui-org/react";
import React, { Key } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
    password_changed_at: string;
    created_at: string;
    avatar?: string;
    team?: string;
    status?: string;
    role?: string;
}

// const statusColorMap = {
//     active: "success",
//     paused: "danger",
//     vacation: "warning",
// };

interface UserListProps {
    users: AppUser[] | null;
}

export default function UserList({ users }: UserListProps) {
    const renderCell = React.useCallback((user: AppUser, columnKey: Key) => {
        const cellValue = user[columnKey as keyof AppUser];

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
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
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
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <FaEye />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
                return <span>{cellValue}</span>;
        }
    }, []);

    return (
        <>
            {users && users.length > 0 ? (
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={users}>
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
        </>
    );
}
