import React from 'react';
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Status, statusColors } from '../types';

interface StatusCardProps {
    status: Status;
}

const StyledCard = styled(Card)<{ status: Status }>(({ status }) => ({
    width: 'auto',
    height: '30px',
    borderRadius: '4px',
    padding: '2px 15px',
    backgroundColor: statusColors[status] || 'grey',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100px',
    maxWidth: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
}));

const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
    return (
        <StyledCard status={status}>
            <Typography variant="body1" component="div">
                {status}
            </Typography>
        </StyledCard>
    );
};

export default StatusCard;