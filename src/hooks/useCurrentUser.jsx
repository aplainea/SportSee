import { useUser } from "../contexts/UserContext.js";

export function useCurrentUser() {
    const { userType } = useUser();

    return userType;
}
