import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MatchesResponse } from "../../types";

export const matchApi = createApi({
  reducerPath: 'matchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://app.ftoyd.com/fronttemp-service' }),
  endpoints: (builder) => ({
    getMatches: builder.query<MatchesResponse, void>({
      query: () => '/fronttemp',
    }),
  }),
});

export const { useGetMatchesQuery } = matchApi;