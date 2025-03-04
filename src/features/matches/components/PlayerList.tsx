import React from 'react';
import { PlayerItem, PlayerName, PlayerKills, ParticipantsList } from '../../../styles/styles';
import { Box } from '@mui/material';

interface Player {
    username: string;
    kills: number;
}

interface PlayerListProps {
    players: Player[];
    avatar: string;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, avatar }) => {
    return (
        <ParticipantsList>
            {players.map((player, index) => (
                <PlayerItem key={index}>
                    <Box display="flex" alignItems="center" gap="5px">
                        <img src={avatar} alt={player.username} style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                        <PlayerName>{player.username}</PlayerName>
                    </Box>
                    <PlayerKills>Убийств: {player.kills}</PlayerKills>
                </PlayerItem>
            ))}
        </ParticipantsList>
    );
};

export default PlayerList;