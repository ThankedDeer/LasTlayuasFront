import { useEffect, useState } from "react";
import { instance } from "../../services/base.api";

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

const addRole = (users: AppUser[] | null): AppUser[] | null => {
    if (users && users.length > 0) {
        const usersWithRoles: AppUser[] = users.map((user) => {
            const randomIndex = Math.floor(Math.random() * 2);
            return {
                ...user,
                role: randomIndex === 0 ? "UserWeb" : "Admin",
            };
        });
        return usersWithRoles;
    }
    return null;
}



const useAllUsers = () => {
    const [allUsers, setAllUsers] = useState<AppUser[] | null>(null);
    const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
    const [errorUsers, setErrorUsers] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoadingUsers(true);
            setErrorUsers(null);

            try {
                const response = await instance.get("users/");
                const users = addRole(response.data)
                setAllUsers(users);
            } catch (error: any) {
                setErrorUsers(error.message as string || "An error occurred");
                console.error("Error fetching users:", error);
            } finally {
                setLoadingUsers(false);
            }
        };

        fetchUsers();
    }, []);

    return { allUsers, loadingUsers, errorUsers };
};

export default useAllUsers;
