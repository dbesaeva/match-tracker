import React from 'react';
import MatchList from './features/matches/components/MatchList';
import { Box } from '@mui/material';

function App() {
    return (
        <Box sx={{
            bgcolor: '#06080C',
            minHeight: '100vh',
            padding: '20px',
        }}>
            <MatchList />
        </Box>
    );
}

export default App;