export interface Player {
    username: string;
    kills: number;
    avatar?: string;
}

export interface Team {
    name: string;
    logo?: string;
    players: Player[];
    points: number;
    place: number;
    total_kills: number;
}

export type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished';

export interface Match {
    time: string;
    title: string;
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    status: MatchStatus;
}

export interface MatchesResponse {
    ok: boolean;
    data: {
        matches: Match[];
    };
}