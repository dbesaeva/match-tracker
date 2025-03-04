import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Status, statuses } from '../types';

const StyledButton = styled(Button)({
    backgroundColor: '#0F1318',
    color: 'white',
    padding: '13px',
    borderRadius: '4px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#1A1F26',
    },
});

const StyledMenu = styled(Menu)({
    marginTop: '8px',
    '& .MuiPaper-root': {
        backgroundColor: '#0F1318',
        color: 'white',
        borderRadius: '4px',
    },
});

const RotatingIcon = styled(ArrowDropDownIcon)<{ open: boolean }>(({ open }) => ({
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease-in-out',
}));

interface DropdownUIProps {
    onStatusChange: (status: Status) => void;
}

const DropdownUI: React.FC<DropdownUIProps> = ({ onStatusChange }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedStatus, setSelectedStatus] = useState<Status>(Status.AllStatuses);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (status: Status) => {
        setSelectedStatus(status);
        onStatusChange(status);
        handleClose();
    };

    return (
        <div>
            <StyledButton onClick={handleClick} endIcon={<RotatingIcon open={Boolean(anchorEl)} />}>
                {selectedStatus}
            </StyledButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {statuses.map((status) => (
                    <MenuItem key={status} onClick={() => handleMenuItemClick(status)}>
                        {status}
                    </MenuItem>
                ))}
            </StyledMenu>
        </div>
    );
};

export default DropdownUI;