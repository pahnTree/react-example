import emptySplitApi from "..";

export const coreApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (creds) => ({
          url: '/core/login/',
          method: 'POST',
          body: creds
        }),
      invalidatesTags: ['User']
    }),
    user: build.query({
      query: () => '/core/user/',
      providesTags: ['User']
    }),
    logout: build.mutation({
      query: () => ({
        url: '/core/logout/',
        method: ['GET']
      }),
      invalidatesTags: ['User']
    })
  })
})

export const {
  useLoginMutation,
  useUserQuery,
  useLogoutMutation,

  usePrefetch
} = coreApi
