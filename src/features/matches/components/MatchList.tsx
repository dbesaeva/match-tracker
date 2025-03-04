import React, { useState, useEffect } from 'react';
import { useGetMatchesQuery } from '../services/matchApi';
import { CircularProgress, Alert, Box, Typography, useTheme } from '@mui/material';
import MatchCard from './MatchCard';
import RefreshButton from '../../../shared/ui/ButtonUI';
import DropdownUI from '../../../shared/ui/DropdownUI';
import AlertIcon from '../../../assets/icons/Alert';
import { Status } from '../../../shared/types';

const MatchList = () => {
    const { data, error, isLoading, refetch } = useGetMatchesQuery();
    const theme = useTheme();
    const [selectedStatus, setSelectedStatus] = useState<Status>(Status.AllStatuses);
    const [lastValidData, setLastValidData] = useState(data);

    useEffect(() => {
        if (data) {
            setLastValidData(data);
        }
    }, [data]);

    const handleRefresh = () => {
        refetch();
    };

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <CircularProgress />
            </Box>
        );
    }

    const matchesToDisplay = error ? lastValidData?.data.matches : data?.data.matches;

    const filteredMatches = matchesToDisplay?.filter(match => {
        if (selectedStatus === Status.AllStatuses) return true;

        const statusMap = {
            [Status.Live]: 'Ongoing',
            [Status.Finished]: 'Finished',
            [Status.MatchPreparing]: 'Scheduled',
        };

        return match.status === statusMap[selectedStatus];
    });

    return (
        <Box sx={{ padding: '20px' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    gap: '10px',
                },
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Tactic Sans',
                        fontSize: '32px',
                        marginLeft: '10px',
                    }} gutterBottom>
                        Match Tracker
                    </Typography>
                    <DropdownUI onStatusChange={status => setSelectedStatus(status as Status)} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {error && (
                        <Alert severity="error" sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#0B0E12', color: 'white' }} icon={<AlertIcon />}>
                            Ошибка: не удалось загрузить информацию
                        </Alert>
                    )}
                    <RefreshButton onClick={handleRefresh} />
                </Box>
            </Box>
            {filteredMatches?.map(match => (
                <MatchCard
                    key={match.title}
                    title={match.title}
                    homeTeam={match.homeTeam}
                    awayTeam={match.awayTeam}
                    homeScore={match.homeScore}
                    awayScore={match.awayScore}
                    status={match.status}
                />
            ))}
        </Box>
    );
};

export default MatchList;
