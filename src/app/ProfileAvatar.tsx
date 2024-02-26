// components/ProfileAvatar.tsx
import React from 'react';
import { Avatar, makeStyles } from '@mui/material';


interface ProfileAvatarProps {
    imageUrl: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ imageUrl }) => {

    return (
        <Avatar
            alt="Profile Image"
            src={imageUrl}
        />
    );
};

export default ProfileAvatar;
