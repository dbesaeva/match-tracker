export enum Status {
    Live = 'Live',
    Finished = 'Finished',
    MatchPreparing = 'Match preparing',
    AllStatuses = 'Все статусы',
}

export const statusColors: Record<Status, string> = {
    [Status.Live]: '#43AD28',
    [Status.Finished]: '#EB0237',
    [Status.MatchPreparing]: '#EB6402',
    [Status.AllStatuses]: 'grey',
};

export const statuses = [
    Status.AllStatuses,
    Status.Live,
    Status.Finished,
    Status.MatchPreparing,
];