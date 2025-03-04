import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

import RefreshIcon from "../../assets/icons/RefreshIcon";
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    backgroundColor: '#EB0237',
    borderRadius: '4px',
    color: 'white',
    padding: '14px 23px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'darkred',
    },
    '&:disabled': {
        backgroundColor: '#701328',
    },
});

interface RefreshButtonProps {
    onClick: () => void;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        onClick();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <StyledButton
            variant="contained"
            onClick={handleClick}
            endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <RefreshIcon />}
            disabled={isLoading}
        >
            Обновить
        </StyledButton>
    );
};

export default RefreshButton;