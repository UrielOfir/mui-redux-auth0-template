import React, {useState} from 'react';
import {Avatar, Menu, MenuItem} from '@mui/material';
import {useSession, signOut, signIn} from "next-auth/react";

const image_url = "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="

const ProfileAvatar = () => {
    const {data: session}: { data: any } = useSession()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(anchorEl==null?event.currentTarget:null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleSignIn = () => {
        signIn();
    }
    const handleLogout = () => {
        handleMenuClose(); // Close the menu when log out is clicked
        signOut(); // Call the logout function passed from the parent component
    };
    return (
        <>
            <Avatar
                alt="Profile Image"
                src={(session && session.user.image) || image_url}
                onClick={handleMenuOpen} // Open menu on click
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {session && <MenuItem>{session.user.name}</MenuItem>}
                {session?
                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>:
                    <MenuItem onClick={handleSignIn}>Sign In</MenuItem>}
            </Menu>
        </>
    );
};

export default ProfileAvatar;
