import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { pause } from "../../utils/pause";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args: FetchFnArgs) => {
      //DEV ONLY
      await pause(500);
      return fetch(...args);
    },
  }),
  tagTypes: ["UsersAlbums", "Album"],
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (results, __, user) => {
          const tags = results.map((album: Album) => {
            return {
              type: "Album",
              id: album.id,
            };
          });
          return [{ type: "UsersAlbums", id: user.id }, ...tags];
        },
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
        invalidatesTags: (_, __, user) => [
          { type: "UsersAlbums", id: user.id },
        ],
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
      deleteAlbum: builder.mutation({
        invalidatesTags: (_, __, album) => [{ type: "Album", id: album.id }],
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;
export { albumsApi };
