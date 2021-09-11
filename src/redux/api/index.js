import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const emptySplitApi = createApi({
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: () => ({})
})

export default emptySplitApi
