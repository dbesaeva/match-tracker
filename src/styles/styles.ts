import { styled } from '@mui/system';
import { Card, Typography, IconButton } from '@mui/material';
import DropListDown from "../assets/icons/DropListDown";

export const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#0B0E12',
    color: 'white',
    borderRadius: '4px',
    margin: '8px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        margin: '4px',
    },
}));

export const MatchInfo = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        gap: '10px',
    },
}));

export const Team = styled('div')(() => ({
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    gap: '10px',
}));

export const Score = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
}));

export const StatusContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '8px',
});

export const ExpandButton = styled(IconButton)({
    color: 'white',
    padding: '4px',
    marginLeft: '4px',
});

export const RotatingIcon = styled(DropListDown)<{ open: boolean }>(({ open }) => ({
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease-in-out',
    width: '24px',
    height: '24px',
}));

export const ParticipantInfo = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
    gap: '30px',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'row',
        gap: '10px',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '10px',
    },
}));

export const TeamParticipants = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    padding: '16px',
    width: '100%',
});

export const ParticipantsList = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '10px',
    },
}));

export const PlayerItem = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#1A1F26',
    borderRadius: '4px',
    flex: '1 1 calc(33.333% - 0px)',
    maxWidth: 'calc(33.333% - 23px)',
    [theme.breakpoints.down('sm')]: {
        flex: '1 1 100%',
        maxWidth: '100%',
    },
}));

export const PlayerName = styled(Typography)(({ theme }) => ({
    fontSize: '0.875rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.75rem',
    },
}));

export const PlayerKills = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
    },
}));

export const TeamSummary = styled('div')(() => ({
    marginTop: '16px',
    padding: '15px',
    backgroundColor: '#1A1F26',
    borderRadius: '4px',
    width: '95%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'space-between',
}));