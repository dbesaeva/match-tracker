import React from 'react';
import { Score, StatusContainer } from '../../../styles/styles';
import { Box } from '@mui/material';
import StatusCard from '../../../shared/ui/StatusUI';
import { Status } from '../../../shared/types';

interface MatchScoreProps {
    homeScore: number;
    awayScore: number;
    status: Status;
}

const MatchScore: React.FC<MatchScoreProps> = ({ homeScore, awayScore, status }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Score>{`${homeScore} : ${awayScore}`}</Score>
            <StatusContainer>
                <StatusCard status={status} />
            </StatusContainer>
        </Box>
    );
};

export default MatchScore;