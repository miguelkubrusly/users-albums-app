import { useFetchPhotoQuery, useAddPhotoMutation } from "../store/store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";

function PhotoList({ album }: PhotoListProps) {
  const { data, error, isFetching } = useFetchPhotoQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();

  const handleAddPhoto = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="flex flex-row h-5 w-5" />;
  } else if (error) {
    content = "Error fetching photos...";
  } else {
    content = data.map((photo: Photo, i: number) => {
      return (
        <div key={photo.id}>
          <PhotoListItem photo={photo} />
        </div>
      );
    });
  }

  const header = (
    <div>
      <h4>Photos for {album.title}</h4>
      <Button loading={result.isLoading} onClick={handleAddPhoto}>
        + Add Photo
      </Button>
    </div>
  );

  return <ExpandablePanel header={header}>{content}</ExpandablePanel>;
}

export default PhotoList;
