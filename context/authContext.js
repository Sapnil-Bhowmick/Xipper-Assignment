import { createContext, useContext, useState } from "react";


const UserContext = createContext();



const AuthProvider = ({ children }) => {

    const [confirm, setConfirm] = useState(null)

    // const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location Loading.....');
    // const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)

    return (
        <UserContext.Provider value={{
            confirm,
            setConfirm,
            // displayCurrentAddress,
            // setDisplayCurrentAddress,
            // locationServicesEnabled,
            // setLocationServicesEnabled
        }}>
            {children}
        </UserContext.Provider>
    )
}


function AuthProfile() {
    const context = useContext(UserContext)

    return context
}




export { AuthProfile, AuthProvider }