import { createContext, useContext, useState } from "react";

/**
 * Context object for user data.
 * @type {import('react').Context}
 */
const UserContext = createContext();

/**
 * UserProvider component that provides the user type and setUserType to its children components through UserContext.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by UserProvider.
 * @returns {JSX.Element} - The JSX element representing the UserProvider component.
 */
export const UserProvider = ({ children }) => {
    /**
     * State hook for user type. The user type is a number that represents the type of user. By default it is set to 12.
     * @typedef {number} UserType
     * @typedef {React.Dispatch<React.SetStateAction<UserType>>} SetUserType
     * @type {[UserType, SetUserType]}
     */
    const [userType, setUserType] = useState(12);

    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};

/**
 * Custom hook that returns the user context.
 * @returns {Object} The user context.
 * @throws {Error} If used outside of a UserProvider.
 */
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
