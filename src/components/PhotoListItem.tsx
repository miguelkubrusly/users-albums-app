import Button from "./Button";
import {
  useFetchPhotoQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} from "../store/store";
import { GoTrashcan } from "react-icons/go";

function PhotoListItem({ photo }: { photo: Photo }) {
  const [deletePhoto, deleteResult] = useDeletePhotoMutation();

  const handleDeletePhoto = (photo: Photo) => {
    deletePhoto(photo);
  };

  return (
    <div>
      <img src={photo.link} />
      <Button
        loading={deleteResult.isLoading}
        onClick={() => {
          handleDeletePhoto(photo);
        }}
      >
        <GoTrashcan />
      </Button>
    </div>
  );
}

export default PhotoListItem;
