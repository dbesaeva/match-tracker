import React from 'react';
import { Team } from '../../../styles/styles';
import { Typography } from '@mui/material';

interface TeamInfoProps {
    name: string;
    logo?: string;
    avatar: string;
}

const TeamInfo: React.FC<TeamInfoProps> = ({ name, avatar }) => {
    return (
        <Team>
            <img src={avatar} alt={name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
            <Typography variant="body1">{name}</Typography>
        </Team>
    );
};

export default TeamInfo;