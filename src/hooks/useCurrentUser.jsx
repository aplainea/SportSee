import { useUser } from "../contexts/UserContext.js";

/**
 * A custom hook that returns the current user's type.
 * @returns {number} The user's type.
 */
export function useCurrentUser() {
    const { userType } = useUser();

    return userType;
}
