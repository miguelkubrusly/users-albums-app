import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { pause } from "../../utils/pause";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args: FetchFnArgs) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhoto: builder.query({
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
        query: (album: Album) => {
          return {
            url: "/photos",
            body: {
              albumId: album.id,
              link: faker.image.imageUrl(),
            },
            method: "POST",
          };
        },
      }),
      deletePhoto: builder.mutation({
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
