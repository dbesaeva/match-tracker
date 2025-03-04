import React, { useState } from 'react';
import { CardContent, Collapse, Box } from '@mui/material';
import { StyledCard, MatchInfo, ExpandButton, RotatingIcon, ParticipantInfo, TeamParticipants } from '../../../styles/styles';
import TeamInfo from "./TeamInfo";
import PlayerList from "./PlayerList";
import TeamSummaryInfo from './TeamSummaryInfo';
import MatchScore from './MatchScore';
import { Status } from '../../../shared/types';

import playerAvatar from '../../../assets/images/avatar_global.png';
import teamAvatar from '../../../assets/images/illustrations_role.png';

interface MatchCardProps {
    title: string;
    homeTeam: { name: string; logo?: string; players: { username: string; kills: number }[]; points: number; place: number; total_kills: number };
    awayTeam: { name: string; logo?: string; players: { username: string; kills: number }[]; points: number; place: number; total_kills: number };
    homeScore: number;
    awayScore: number;
    status: 'Scheduled' | 'Ongoing' | 'Finished';
}

const MatchCard: React.FC<MatchCardProps> = ({ homeTeam, awayTeam, homeScore, awayScore, status }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getStatusCardStatus = (status: string): Status => {
        switch (status) {
            case 'Ongoing':
                return Status.Live;
            case 'Finished':
                return Status.Finished;
            case 'Scheduled':
                return Status.MatchPreparing;
            default:
                return Status.AllStatuses;
        }
    };

    return (
        <StyledCard>
            <CardContent>
                <MatchInfo>
                    <Box display="flex" alignItems="center" >
                        <TeamInfo name={homeTeam.name} avatar={teamAvatar} />
                    </Box>
                    <Box display="flex" justifyContent="center" flex={1}>
                        <MatchScore homeScore={homeScore} awayScore={awayScore} status={getStatusCardStatus(status)} />
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="flex-end"  gap="4px">
                        <TeamInfo name={awayTeam.name} avatar={teamAvatar} />
                        <ExpandButton onClick={handleExpandClick} sx={{ marginLeft: '4px' }}>
                            <RotatingIcon open={expanded} />
                        </ExpandButton>
                    </Box>
                </MatchInfo>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <ParticipantInfo>
                        <TeamParticipants>
                            <PlayerList players={homeTeam.players} avatar={playerAvatar} />
                            <TeamSummaryInfo points={homeTeam.points} place={homeTeam.place} totalKills={homeTeam.total_kills} />
                        </TeamParticipants>
                        <TeamParticipants>
                            <PlayerList players={awayTeam.players} avatar={playerAvatar} />
                            <TeamSummaryInfo points={awayTeam.points} place={awayTeam.place} totalKills={awayTeam.total_kills} />
                        </TeamParticipants>
                    </ParticipantInfo>
                </Collapse>
            </CardContent>
        </StyledCard>
    );
};

export default MatchCard;