import React from 'react';

const Usercontext = React.createContext()

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return (
        <Usercontext.Provider value = {{user, setUser}}>
        {children}
        </Usercontext.Provider>
    );
}

export default UserContextProvider;
