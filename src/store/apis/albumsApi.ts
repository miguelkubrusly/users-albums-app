import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { pause } from "../../utils/pause";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args: FetchFnArgs) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  tagTypes: ["Album"],
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (_, __, user) => [{ type: "Album", id: user.id }],
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (_, __, user) => [{ type: "Album", id: user.id }],
        query: (user) => {
          return {
            url: "/albums",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
            method: "POST",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
