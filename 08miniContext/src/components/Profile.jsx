import React, { useContext } from 'react';
import  Usercontext from '../context/provider';

const Profile = () => {
    const {user} = useContext(Usercontext);
    if (!user) return <div> please login </div>
    return <div> Welcome {user.username}</div>
}

export default Profile;
