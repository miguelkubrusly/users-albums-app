import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { pause } from "../../utils/pause";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args: FetchFnArgs) => {
      //DEV ONLY
      await pause(500);
      return fetch(...args);
    },
  }),
  tagTypes: ["AlbumsPhotos", "Photo"],
  endpoints(builder) {
    return {
      fetchPhoto: builder.query({
        providesTags: (results, _, album) => {
          const tags = results.map((photo: Photo) => {
            return {
              type: "Photo",
              id: photo.id,
            };
          });
          return [{ type: "AlbumsPhotos", id: album.id }, ...tags];
        },
        query: (album: Album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (_, __, album: Album) => {
          return [{ type: "AlbumsPhotos", id: album.id }];
        },
        query: (album: Album) => {
          return {
            url: "/photos",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
            method: "POST",
          };
        },
      }),
      deletePhoto: builder.mutation({
        invalidatesTags: (_, __, photo: Photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo: Photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotoQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
export { photosApi };
