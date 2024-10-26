import { useFetchPhotoQuery, useAddPhotoMutation } from "../store/store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";

function PhotoList({ album }: PhotoListProps) {
  const { data, error, isFetching } = useFetchPhotoQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton
        times={4}
        className="flex flex-row items-center justify-between h-20 w-20"
        isRow
        gap={1}
      />
    );
  } else if (error) {
    content = "Error fetching photos...";
  } else {
    content = data.map((photo: Photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold ">Photos in {album.title}</h3>
        <Button
          rounded
          loading={addPhotoResults.isLoading}
          onClick={handleAddPhoto}
        >
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotoList;
