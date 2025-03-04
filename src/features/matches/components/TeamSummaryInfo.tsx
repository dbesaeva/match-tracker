import React from 'react';
import { TeamSummary } from '../../../styles/styles';
import { Typography } from '@mui/material';

interface TeamSummaryInfoProps {
    points: number;
    place: number;
    totalKills: number;
}

const TeamSummaryInfo: React.FC<TeamSummaryInfoProps> = ({ points, place, totalKills }) => {
    return (
        <TeamSummary>
            <Typography variant="body2">Points: <strong>{points}</strong></Typography>
            <Typography variant="body2">Место: <strong>{place}</strong></Typography>
            <Typography variant="body2">Всего убийств:: <strong>{totalKills}</strong></Typography>
        </TeamSummary>
    );
};

export default TeamSummaryInfo;